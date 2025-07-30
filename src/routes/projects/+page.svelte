<script lang='ts'>
    import { GitHubAPI }  from '$lib/services/gitHubAPI'
	import type { IGitHubRepos } from 'lib/models/IGitHubRepos'
	import Icon from '@iconify/svelte'
	import paths from 'lib/helpers/paths.svelte';
    
    let ymerMIRepos: IGitHubRepos[] = [], imgErr: Record<string, boolean> = {}

    try {
        (async () => {
            ymerMIRepos = await new GitHubAPI('Ymer-MI').getRepos()
        })()
    } catch (error) {
        console.error('Error in load function:', error);
    }
</script>

<h1>My projects</h1>
<p>
Welcome to my projects page! Here you can find a collection of my work, including web applications, libraries, and other software projects. Each project is a testament to my skills and interests in software development. Feel free to explore and reach out if you have any questions or feedback!
</p>
<ul>
    {#if ymerMIRepos.length > 0}
        {#each ymerMIRepos as r}
            <li>
                <a href={ r.html_url } target='_blank'>
                    <div>
                        {#if !imgErr[r.id]}
                            <img src={ paths.addBase(`/img/repoThumbnails/${ r.full_name }.png`) } alt={ r.full_name } on:error={() => imgErr[r.id] = true }/>
                        {:else}
                            <Icon icon='mdi:image-off' width='100%' />
                        {/if}
                    </div>
                    <section>
                        <h2>
                            { r.name.replaceAll('-', ' ') }
                            <Icon icon='mdi:external-link'/>
                        </h2>
                        <p>{ r.description ?? 'No description available.' }</p>
                    </section>
                </a>
            </li>
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