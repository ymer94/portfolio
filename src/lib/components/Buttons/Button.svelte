<script lang='ts'>
    type ButtonProps = {
        children: () => any,
        onClick: () => void,
        type?: HTMLButtonElement['type'],
        id?: string,
        className?: string,
        disabled?: boolean,
    }

    const { children, onClick, type = 'button', id, className, disabled }: ButtonProps = $props()
</script>

<button type={type} id={id} class={className} disabled={disabled} onclick={onClick}>
    {@render children?.()}
</button>