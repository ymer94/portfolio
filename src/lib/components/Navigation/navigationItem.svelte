<script lang="ts">
    import { base } from '$app/paths'
    import { Language } from '$lib/models/Language'
	import { getStores } from '$app/stores'

    export type NavigationPageObject = {
        name: {
            en: string,
            sv: string
        },
        path: string
    }
    
    const { page } = getStores(), { navPgObj } = $props<{ navPgObj: NavigationPageObject }>(), { name, path } = navPgObj
</script>

<li class="w-full md:w-auto" class:active={ $page.url.pathname === path } data-sveltekit-preload-data>
    <a class="w-full inline-block" href={`${base}${path}`}>
        {#if globalThis.language === Language.SV}
            {name.sv}
        {:else}
            {name.en}
        {/if}
    </a>
</li>