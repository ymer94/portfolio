<script lang="ts">
	import '$css/style.css'

	Object.assign(globalThis, {
		// Global paths for assets and libraries
		paths: (() => {
			const libPath = 'src/lib', assetPath = `${libPath}/static`

			return {
				libPath,
				assetPath,
				css: `/css`,
				img: `/img`,
				components: `/components`
			}
		})()
	})

	const { paths } = globalThis

	let { children } = $props()
</script>

<svelte:head>
	<title>Portfolio - Ymer</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="text/css" href="{ paths.css }/style.css" />
</svelte:head>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
		</ul>
	</nav>
</header>
<main>
	{@render children()}
</main>
<footer></footer>