<script lang="ts">
    import { browser } from '$app/environment'
    import { getStores } from '$app/stores'
	import { onDestroy } from 'svelte'
	import paths from 'lib/helpers/paths.svelte'
    import 'css/error.css'

    const { page } = getStores(), home = paths.addBase('/')

    if (browser) {
        const main = document.querySelector('body > main')

        if (main) {
            main.classList.add('error')

            onDestroy(() => {
                main.classList.remove('error')
            })
        }
    }
</script>

<div class="error-container">
    <h1>{ $page.status }: { $page.error?.message }</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <a href={ home }><button type="button">Go back home</button></a>
</div>