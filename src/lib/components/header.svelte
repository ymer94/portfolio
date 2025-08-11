<script lang='ts'>
	import NavigationList from './Navigation/NavList.svelte'
	import SocialsList from './SocialLinks/SocList.svelte'
</script>

<header class='sticky top-0 z-50' style='--icon-size: 2.4rem'>
	<SocialsList />
	<div>
		<i class='icon thors-coding'></i>
	</div>
	<NavigationList />
</header>

<style>
	header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;

		> :global(*) {
			padding-block: calc(var(--spacing) * 3);
			padding-inline: calc(var(--spacing) * 4);
		}

		> :nth-child(2) {
			text-align: center;
		}

		i {
			width: 4em;
			height: 4em;
			vertical-align: middle;
		}
	}
</style>