<script lang="ts">
    export type Page = {
        name: {
            en: string,
            sv: string
        },
        path: string
    }
    
    const { page } = $props<Page>(), { name, path } = page;
</script>

<li>
    <a href={path}>
        {#if globalThis.language === 'en'}
            {name.en}
        {:else}
            {name.sv}
        {/if}
    </a>
</li>