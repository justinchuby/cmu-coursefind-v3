<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  import { gql } from "apollo-boost";
  import { query } from "svelte-apollo";
  import { client } from "../../data";
  export async function preload({ params }) {
    const { courseId } = params;
    const GET_COURSE = gql`
    {
      courses(filter: {
        courseId: "${courseId}"
      }) {
        name
        courseId
        rundate
        coreqs
        prereqs
        desc
        notes
        department
        units
        prereqsObj {
          invert
          reqs
        }
        coreqsObj {
          invert
          reqs
        }
        meetings {
          name
          instructors
          times {
            building
            room
            location
          }
        }
        rundate
        semester
        year
      }
    }
    `;
    const course = query(client, { query: GET_COURSE });
    return { course, courseId };
  }
</script>

<script>
  import linkifyHtml from "linkifyjs/html";
  export let course;
  export let courseId;
</script>

<svelte:head>
  <title>CMU Course Find</title>
</svelte:head>

{#await $course then result}
<!-- Take the first course -->
  {#if result.data.courses.length}
    {#each result.data.courses.slice(0, 1) as course}
      <h1>{course.courseId}</h1>
      <h2>{course.name}</h2>
      <h3>
        {course.semester.charAt(0).toUpperCase() + course.semester.slice(1)}
        {course.year}
        <br />
        {course.department}
      </h3>
      <p>
        Pre-requisites: {course.prereqs || 'None'}
        <br />
        Co-requisites: {course.coreqs || 'None'}
        <br />
        Units: {course.units || 'Unknown'}
        <br />
      </p>

      <h3>Description</h3>
      <p>{@html linkifyHtml(course.desc, { defaultProtocol: 'https' })}</p>

      <h3>Notes</h3>
      <p>{ course.notes.replace(/\r?\n|\r|[ ]{2,}/g, '').replace(/(\.|:)([a-zA-Z])/g, '$1 $2') }</p>

      <h3>Meetings</h3>
      {#if course.meetings}
        {#each course.meetings as meeting}
          <p>
            {meeting.name}
            <br />
            {meeting.instructors.join('; ')}
          </p>
        {/each}
      {/if}
    {/each}
  {:else}
    <h1>{courseId}</h1>
    <p>Not found in database. Will add soon. </p>
  {/if}

{:catch error}
  ERROR: {error}
{/await}
