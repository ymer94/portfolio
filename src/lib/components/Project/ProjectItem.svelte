<script lang='ts'>
	import { type IGitHubRepo } from 'lib/models/IGitHubRepo'
    import paths from '$lib/helpers/paths.svelte'
    import Icon from '@iconify/svelte'
	import ExternalLink from '../Links/ExternalLink.svelte';

    type Props = {
        repo: IGitHubRepo
    }

    const props: Props = $props(), {id, html_url, full_name, name, description} = props.repo

    const imgErr: Record<string, boolean> = {}
</script>

<li>
    <div>
        {#if !imgErr[id]}
            <img src={ paths.addBase(`/img/repoThumbnails/${ full_name }.png`) } alt={ full_name } onerror={() => imgErr[id] = true }/>
        {:else}
            <Icon icon='mdi:image-off' width='100%' />
        {/if}
    </div>
    <ExternalLink href={ html_url } className='project-link'>
        <h2>
            { name.split('-').map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ') }
            <Icon icon='mdi:external-link'/>
        </h2>
    </ExternalLink>
    <p>{ description ?? 'No description available.' }</p>
</li>

<style>
    li {
        display: flex;
        flex-direction: column;
        gap: .5em;

        div {
            align-self: center;
            background-color: var(--color-purple-dark);
            border-radius: .5em;
            
            
            img, :global(svg):first-child {
                width: 32rem;
                height: 18rem;
                padding: .5em;
                object-fit: fill;
            }
        }
    
        :global(.project-link) {
            color: var(--color-fg);
    
            &:hover {
                color: var(--color-purple-link);
            }
            
            h2 {
                text-align: left;
                :global(svg) {
                    display: inline;
                }
            }
        }
    }

    @media (width >= 76.8rem) {
        :global(.project-link) {
            flex-direction: row;
        }
    }
</style>