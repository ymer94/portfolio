<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores'

    export type Page = {
        name: {
            en: string,
            sv: string
        },
        path: string
    }
    
    const { navPage } = $props<Page>(), { name, path } = navPage
</script>

<li class="w-full md:w-auto" class:active={ $page.url.pathname === path }>
    <a class="w-full inline-block" href={`${base}${path}`}>
        {#if globalThis.language === 'en'}
            {name.en}
        {:else}
            {name.sv}
        {/if}
    </a>
</li>