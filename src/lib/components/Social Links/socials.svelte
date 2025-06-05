<script lang="ts">
    import SocialItem, { type SocialItemObject } from './socialItem.svelte';

    const size = '2.4rem' ,socItmObjs: SocialItemObject[] = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/ymer',
            icon: {
                name: 'cib:linkedin',
                color: '#0a66C2',
                size
            }
        },
        {
            name: 'GitHub',
            url: 'https://github.com/ymer94',
            icon: {
                name: 'cib:github',
                color: '#f0f6fc',
                size
            }
        },
        {
            name: 'GitLab',
            url: 'https://gitlab.com/ymer94',
            icon: {
                name: '.gitlab',
                size
            }
        },
        {
            name: 'CodeWars',
            url: 'https://codewars.com/users/ymer94',
            icon: {
                name: 'cib:codewars',
                color: '#f05656',
                size
            }
        }
    ]
</script>

<ul class="flex px-4 py-3">
    {#each socItmObjs as socItmObj}
        <SocialItem { socItmObj } />
    {/each}
</ul>

<style>
    ul {
        align-items: center;
        gap: 1em;
    }
</style>