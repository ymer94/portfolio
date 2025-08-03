<script lang='ts'>
	import Navigation from './Navigation/NavList.svelte'
	import Socials from './Social Links/SocList.svelte';
</script>

<header class='sticky top-0 z-50'>
	<Socials />
	<Navigation />
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
</style>