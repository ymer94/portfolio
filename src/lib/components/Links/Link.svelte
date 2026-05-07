<script lang='ts'>
	import type { Snippet } from 'svelte'

    type Props = {
        href: string
        children: Snippet<[]>
        id?: string
        className?: string
        target?: string
        rel?: string
    }
    const { href, children, id = '', className = '', target='', rel='' }: Props = $props()
</script>

<a { id } class={ className } { href } { target } { rel }>
    {@render children()}
</a>