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

<h2>Under construction! For now, use "Search" in browser to search.</h2>

<p>{@html courseList}</p>
