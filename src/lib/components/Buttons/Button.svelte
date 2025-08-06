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

<style>
    button {
        cursor: pointer;
        padding: .5em 1em;
        border: none;
        border-radius: .5rem;
        background-color: var(--color-blue);
        color: var(--color-fg);
        font-size: 1.6rem;
        text-decoration: none;
        text-align: center;
        transition: 0.2s ease-in-out;

        &:hover, &:active {
            background-color: var(--color-blue-dark);
            text-decoration: underline;
        }
        
        &:hover {
            transform: scale(1.1);
            box-shadow: var(--box-shadow);
        }
        
        &:active {
            transform: scale(.9);
            box-shadow: inset var(--box-shadow);
        }

        &:disabled {
            background-color: var(--color-disabled);
            cursor: not-allowed;
        }
    }
</style>