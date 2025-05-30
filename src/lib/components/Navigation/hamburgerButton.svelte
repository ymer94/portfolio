<script lang="ts">
    export let isOpen: boolean;
</script>

<button id="button-burger" class="md:hidden p-2" aria-label="Toggle menu" on:click={() => isOpen = !isOpen}>
    <div class="w-6 h-5 relative flex flex-col justify-between">
        <span class:rotate-45={isOpen} class:translate-y-2={isOpen}></span>
        <span class:opacity-0={isOpen}></span>
        <span class:-rotate-45={isOpen} class:-translate-y-2={isOpen}></span>
    </div>
</button>