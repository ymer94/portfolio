<script lang='ts'>
	import Button from './Button.svelte'
	import Icon from '@iconify/svelte'

    type DownloadButtonProps = {
        children: () => any,
        URL: string
    }

    let { children, URL = '' }: DownloadButtonProps = $props()
</script>
<Button type='button' onClick={ () => {
    window.open(URL, '_self', 'noopener noreferrer')
    } }>
    <Icon icon='mdi:download' width='1em' height='1em' />
    {@render children?.()}
</Button>