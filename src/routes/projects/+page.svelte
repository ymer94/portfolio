<script lang='ts'>
    import { GitHubAPI }  from '$lib/services/gitHubAPI'
    import ProjectList from '$lib/components/Project/ProjectList.svelte'

    const APIs = [...['Ymer-MI'/* , 'Ymer94' */].map<GitHubAPI>(u => new GitHubAPI(u))/* , new GitHubAPI('') */]
</script>

<h1>My projects</h1>
<p>
Welcome to my projects page! Here you can find a collection of my work, including web applications, libraries, and other software projects. Each project is a testament to my skills and interests in software development. Feel free to explore and reach out if you have any questions or feedback!
</p>
{#each APIs as API (API.getUserName())}
    <section>
        {#await API.getRepos()}
            <p>Loading repositories of { API.getUserName() }...</p>
        {:then repos}
            <h1>{API.getUserName()}'s repositories</h1>
            <ProjectList { repos } />
        {:catch error}
            <p>Error loading repositories: { error.message }</p>
        {/await}
    </section>
{/each}