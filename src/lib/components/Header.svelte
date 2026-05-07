<script lang='ts'>
	import NavigationList from './Navigation/NavList.svelte'
	import SocialsList from './SocialLinks/SocList.svelte'
</script>

<header class='sticky top-0 z-50' style='--icon-size: 2.4rem'>
	<SocialsList />
	<div>
		<a href='/' aria-label='home'>
			<i class='icon thors-coding'></i>
		</a>
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
			padding: 0;
			text-align: center;
		}

		i {
			--size: 4em;

			width: var(--size);
			height: var(--size);
			vertical-align: middle;
		}
	}
</style>