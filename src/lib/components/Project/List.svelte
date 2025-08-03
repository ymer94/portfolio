<script lang='ts'>
	import type { IGitHubRepo } from '$lib/models/IGitHubRepo'
	import Item from './Item.svelte';

    type Props = {
        repos: IGitHubRepo[]
    }

    const { repos }: Props = $props()
</script>

<ul>
    {#if repos.length > 0}
        {#each repos as repo}
            <Item { repo } />
        {/each}
    {:else}
        <li>No repositories found.</li>
    {/if}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>