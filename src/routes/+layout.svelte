<script lang="ts">
	import { base } from '$app/paths'
	import '$css/style.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>Portfolio - Ymer</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<header>
	<nav>
		<ul>
			<li><a href="{ base }/">Home</a></li>
		</ul>
	</nav>
</header>
<main>
	{@render children()}
</main>
<footer></footer>