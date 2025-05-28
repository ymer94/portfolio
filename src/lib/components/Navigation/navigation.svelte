<script lang="ts">
    import NavigationItem, { type Page } from 'components/Navigation/navigationItem.svelte'

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
</script>

<nav>
    <ul>
        {#each pages as page}
            <NavigationItem {page} />
        {/each}
    </ul>
</nav>