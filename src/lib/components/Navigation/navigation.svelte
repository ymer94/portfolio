<script lang="ts">
    import NavigationItem, { type Page } from 'components/Navigation/navigationItem.svelte'
    import HamburgerButton from './HamburgerButton.svelte';

    const pages: Page[] = [{
        name: {
            en: 'Home',
            sv: 'Hem'
        },
        path: '/'
    },
    {
        name: {
            en: 'About',
            sv: 'Om'
        },
        path: '/about'
    },
    {
        name: {
            en: 'Contact',
            sv: 'Kontakt'
        },
        path: '/contact'
    }]

    let isOpen = false;
</script>

<nav class="w-full px-4 py-3">
    <div class="flex justify-end items-center">
        <HamburgerButton bind:isOpen />
        <ul class="hidden flex-col md:space-y-0 md:space-x-6" class:hidden={ !isOpen } class:flex={ isOpen }>
            {#each pages as navPage}
                <NavigationItem {navPage} />
            {/each}
        </ul>
    </div>
</nav>