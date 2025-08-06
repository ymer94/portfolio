<script lang='ts'>
	import Button from './Button.svelte'
	import Icon from '@iconify/svelte'

    type DownloadButtonProps = {
        children: () => any,
        URL: string
    }

    let { children, URL = '' }: DownloadButtonProps = $props()
</script>
<Button className='download' type='button' onClick={ () => {
    window.open(URL, '_blank', 'noopener noreferrer')
    } }>
    <Icon icon='mdi:download'/>
    {@render children?.()}
</Button>

<style>
    :global(button.download) {
        display: inline-flex;
        align-items: center;
        gap: .5em;
        background-color: var(--color-green-dark);
        
        &:hover, &:active {
            background-color: var(--color-green-darker);
        }

        > :global(svg) {
            position: relative;
            top: .15em;
            width: 1.2em;
            height: 1.2em;
        }
    }
</style>