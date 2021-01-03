<style>
  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
</style>

<script>
  import { courseList } from "./_course_list.js";
</script>

<svelte:head>
  <title>CMU Course Find</title>
  <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
</svelte:head>

<h1>CMU Course Find</h1>

<h3>This is a new version using the <link href="https://github.com/justinchuby/cmu-courseapi-graphql">GraphQL API</h>. It's under construction since I removed the elasticsearch database. For now, use "Search" in browser to search.</h3>

<p>{@html courseList}</p>
