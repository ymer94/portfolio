<script lang='ts'>
    import { GitHubAPI }  from '$lib/services/gitHubAPI'
    import ProjectList from '$lib/components/Project/ProjectList.svelte'

    const APIs = ['Ymer-MI', 'Ymer94'].map<GitHubAPI>(u => new GitHubAPI(u))
</script>

<h1>My projects</h1>
<p>
Welcome to my projects page! Here you can find a collection of my work, including web applications, libraries, and other software projects. For now these are only school projects bet as I build more I will include them too. Feel free to explore and reach out if you have any questions or feedback!
</p>
{#each APIs as API (API.getUserName())}
    <section class='project-section'>
        {#await API.getRepos()}
            <p>Loading repositories of { API.getUserName() }...</p>
        {:then repos}
            <h1>{API.getUserName()}'s repositories</h1>
            <ProjectList repos={ repos.filter(r => API.getUserName() !== 'Ymer94' || r.name.toLowerCase() === 'portfolio' ) } />
        {:catch error}
            <p>Error loading repositories: { error.message }</p>
        {/await}
    </section>
{/each}

<style>
    .project-section:not(:last-child) {
        margin-bottom: 2em;
    }
</style>