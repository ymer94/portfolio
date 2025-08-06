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
        color: var(--colo-fg);
        text-decoration: none;

        &:hover {
            background-color: var(--color-blue-dark);
            text-decoration: underline;
        }

        &:disabled {
            background-color: var(--color-disabled);
            cursor: not-allowed;
        }
    }
</style>