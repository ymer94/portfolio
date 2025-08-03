<script lang='ts'>
	import { onMount } from 'svelte'
    import { GitHubAPI }  from '$lib/services/gitHubAPI'
	import type { IGitHubRepo } from '$lib/models/IGitHubRepo'
    import List from '$lib/components/Project/List.svelte'
    
    let ymerMIRepos: IGitHubRepo[] = []
    
    onMount(async () => {
        try {
            ymerMIRepos = await new GitHubAPI('Ymer-MI').getRepos()
        } catch (error) {
            console.error('Error in load function:', error)
        }
    })
</script>

<h1>My projects</h1>
<p>
Welcome to my projects page! Here you can find a collection of my work, including web applications, libraries, and other software projects. Each project is a testament to my skills and interests in software development. Feel free to explore and reach out if you have any questions or feedback!
</p>
<List repos={ ymerMIRepos } />