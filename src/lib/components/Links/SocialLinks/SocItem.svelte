<script lang='ts'>
    import Icon from '@iconify/svelte'
	import ExternalLink from '$lib/components/Links/ExternalLink.svelte';

    export type SocialItemObject = {
        name: string,
        url: string,
        icon: {
            name: string,
            color?: string
        }
    }

    type Props = {
        socItmObj: SocialItemObject,
        displayName?: boolean
    }

    const props: Props = $props(), {name, url, icon} = props.socItmObj, displayName = props.displayName ?? false
</script>

<li>
    <ExternalLink href={ url } className='social-link'>
        {#if icon.name.startsWith('.')}
            <i class={ `icon ${icon.name.slice(1)}` }></i>
        {:else}
            <Icon icon={ icon.name } color={ icon.color }/>
        {/if}
        {#if displayName}
            { name }
        {/if}
    </ExternalLink>
</li>

<style>
    li {
        display: flex;
        align-items: center;

        :global(.social-link) {
            display: flex;
            align-items: center;

            i, :global(svg) {
                width: var(--icon-size);
                height: var(--icon-size);
            }
        }
    }
</style>