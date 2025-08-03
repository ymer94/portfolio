<script lang='ts'>
    import paths from '$lib/helpers/paths.svelte'
    import Icon from '@iconify/svelte'
	import { type IGitHubRepo } from 'lib/models/IGitHubRepo'

    type Props = {
        repo: IGitHubRepo
    }

    const props: Props = $props(), {id, html_url, full_name, name, description} = props.repo

    const imgErr: Record<string, boolean> = {}
</script>

<li>
    <a href={ html_url } target='_blank'>
        <div>
            {#if !imgErr[id]}
                <img src={ paths.addBase(`/img/repoThumbnails/${ full_name }.png`) } alt={ full_name } onerror={() => imgErr[id] = true }/>
            {:else}
                <Icon icon='mdi:image-off' width='100%' />
            {/if}
        </div>
        <section>
            <h2>
                { name.replaceAll('-', ' ') }
                <Icon icon='mdi:external-link'/>
            </h2>
            <p>{ description ?? 'No description available.' }</p>
        </section>
    </a>
</li>

<style>
    a {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5em;
        color: var(--color-fg);

        &:hover {
            text-decoration: underline;
        }

        div {
            max-width: 30rem;
            max-height: 15rem;
            padding: 1rem;
            background-color: var(--color-bg);

            img, :global(svg):first-child {
                max-width: 28rem;
                max-height: 13rem;
                object-fit: scale-down;
            }
        }

        section {

            &:hover {
                color: var(--color-purple-link);
            }
            
            h2 {
                display: inline-flex;
                width: fit-content;
                gap: .1em;
                text-align: left;
            }
        }
    }

    @media (width >= 76.8rem) {
        a {
            flex-direction: row;
        }
    }
</style>