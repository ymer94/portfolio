<script lang="ts">
    import { GitHubAPI }  from '$lib/services/gitHubAPI';
	import type { IGitHubRepos } from 'lib/models/IGitHubRepos';
    
    let ymerMIRepos: IGitHubRepos[] = [];

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
        {#each ymerMIRepos as repo}
            <li>{repo.name}</li>
        {/each}
    {:else}
        <li>No repositories found.</li>
    {/if}
</ul>