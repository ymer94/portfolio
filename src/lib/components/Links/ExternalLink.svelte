<script lang='ts'>
	import Link from './Link.svelte'
	import type { Snippet } from 'svelte'

    const { id, className, href, children }: { id?: string, className?: string, href: string, children: Snippet<[]> } = $props()

</script>
<Link { id } { className } { href } target='_blank' rel='nofollow noopener noreferrer'>
    {@render children()}
</Link>