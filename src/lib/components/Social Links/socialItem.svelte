<script lang="ts">
    import paths from '../../helpers/paths.svelte'
    import Icon from '@iconify/svelte'

    export type SocialItemObject = {
        name: string,
        url: string,
        icon: {
            name: string,
            color?: string,
            size?: string
        }
    }

    type Props = {
        socItmObj: SocialItemObject,
        displayName?: boolean
    }

    const props: Props = $props<{} & Props >(),
    {name, url, icon} = props.socItmObj, displayName = props.displayName ?? false
</script>

<li>
    <a href={ paths.addBase(url) } target="_blank" rel="noopener noreferrer">
        {#if icon.name.startsWith('.')}
            <i class={ `icon ${icon.name.slice(1)}` } style={ `width: ${icon.size}; height: ${icon.size}` }></i>
        {:else}
            <Icon icon={ icon.name } width={ icon.size ?? '2.4rem' } color={ icon.color }/>
        {/if}
        {#if displayName}
            { name }
        {/if}
    </a>
</li>

<style>
    li {
        display: flex;
        align-items: center;

        a {
            display: flex;
            align-items: center;
        }
    }
</style>