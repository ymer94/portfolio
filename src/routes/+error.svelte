<script lang="ts">
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import  'css/error.css'

    const home = `${base}/`
</script>

<div class="error-container">
    <h1>{ $page.status }: { $page.error?.message }</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <button type="button" on:click={ () => location.href = home }><a href={ home }>Go back home</a></button>
</div>