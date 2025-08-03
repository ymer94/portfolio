<script lang="ts">
	import Navigation from './Navigation/navList.svelte'
	import Socials from './Social Links/socials.svelte';
</script>

<header class="sticky top-0 z-50">
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