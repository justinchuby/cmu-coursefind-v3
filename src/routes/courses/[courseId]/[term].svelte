<script context="module">
  export async function preload({ params }) {
    const { courseId, term } = params
    return this.redirect(307, `/courses/${courseId}#${term}`)
  }
</script>
