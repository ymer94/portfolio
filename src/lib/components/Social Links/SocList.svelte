<script lang='ts'>
    import SocialItem, { type SocialItemObject } from './SocItem.svelte';

    const socItmObjs: SocialItemObject[] = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/ymer',
            icon: {
                name: 'cib:linkedin',
                color: '#0a66C2'
            }
        },
        {
            name: 'CodeWars',
            url: 'https://codewars.com/users/ymer94',
            icon: {
                name: 'cib:codewars',
                color: '#f05656'
            }
        },
        {
            name: 'GitHub',
            url: 'https://github.com/ymer94',
            icon: {
                name: 'cib:github',
                color: '#f0f6fc'
            }
        },
        {
            name: 'GitLab',
            url: 'https://gitlab.com/ymer94',
            icon: {
                name: '.gitlab'
            }
        }
    ]
</script>

<ul>
    {#each socItmObjs as socItmObj}
        <SocialItem { socItmObj } />
    {/each}
</ul>

<style>
    ul {
        display: grid;
        grid-template: repeat(2, var(--icon-size)) / repeat(2, var(--icon-size));
        gap: 1em;

        @media (width >= 48rem) {
            display: flex;
            align-items: center;
        }
    }
</style>