<script lang="ts">
    import { base } from '$app/paths'
    import { Language } from '$lib/models/Language'
	import { getStores } from '$app/stores'

    export type Page = {
        name: {
            en: string,
            sv: string
        },
        path: string
    }
    
    const { page } = getStores(), { navPage } = $props<{ navPage: Page }>(), { name, path } = navPage
</script>

<li class="w-full md:w-auto" class:active={ $page.url.pathname === path }>
    <a class="w-full inline-block" href={`${base}${path}`}>
        {#if globalThis.language === Language.SV}
            {name.sv}
        {:else}
            {name.en}
        {/if}
    </a>
</li>