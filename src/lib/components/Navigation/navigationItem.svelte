<script lang="ts">
    import { Language } from '$lib/models/Language'
	import { getStores } from '$app/stores'
	import paths from 'lib/helpers/paths.svelte';

    export type NavigationPageObject = {
        name: {
            en: string,
            sv: string
        },
        path: string
    }
    
    const { page } = getStores(), { navPgObj } = $props<{ navPgObj: NavigationPageObject }>(), { name, path } = navPgObj
</script>


<li class="w-full md:w-auto" class:active={ $page.url.pathname === paths.addBase(path) } data-sveltekit-preload-data>
    <a class="w-full inline-block" href={path.addBase(path)}>
        {#if globalThis.language === Language.SV}
            {name.sv}
        {:else}
            {name.en}
        {/if}
    </a>
</li>