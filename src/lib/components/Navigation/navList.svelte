<script lang='ts'>
    import NavigationItem, { type NavigationPageObject } from './NavItem.svelte'
    import HamburgerButton from './HamburgerButton.svelte'

    const navPgObjs: NavigationPageObject[] = [
        {
            name: {
                en: 'Home',
                sv: 'Hem'
            },
            path: '/'
        },
        {
            name: {
                en: 'Projects',
                sv: 'Projekt'
            },
            path: '/projects'
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
        }
    ]

    let isOpen = false;
</script>

<nav class='w-full px-4 py-3'>
    <div class='flex justify-end items-center'>
        <HamburgerButton bind:isOpen />
        <ul class='hidden flex-col md:space-y-0 md:space-x-6' class:hidden={ !isOpen } class:flex={ isOpen }>
            {#each navPgObjs as navPgObj}
                <NavigationItem {navPgObj} />
            {/each}
        </ul>
    </div>
</nav>