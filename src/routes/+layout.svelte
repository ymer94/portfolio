<script lang='ts'>
	import 'css/style.css'
	import Header from '$lib/components/Header.svelte'
	import Footer from 'lib/components/Footer.svelte';

	let { children } = $props()
</script>

<svelte:head>
	<title>Portfolio | Ymer</title>
	<meta charset='UTF-8' />
	<meta name='viewport' content='width=device-width, initial-scale=1.0' />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />