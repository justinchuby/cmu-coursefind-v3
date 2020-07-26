<script context="module">
    export async function preload({ params }) {
        console.log(params)
        const { courseId } = params;
        return this.redirect(302, `/courses/${courseId}`);
    }
</script>
