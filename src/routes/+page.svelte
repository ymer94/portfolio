<script lang='ts'>
	import paths from '$lib/helpers/paths.svelte'
	import Icon from '@iconify/svelte';
</script>

<img src={ paths.addBase('/img/profile.png') } alt='Anime style portrait of Ymer Nordström.'>
<section>
    <h1>Ymer Nordström</h1>
    <h2>Software developer</h2>
    <p>
        I'm a general software developer with a passion for creating customized solutions directly against end users.
        In my years I have worked in a number of different teams, languages & environments.
    </p>
    <section>
        <h3>
            With experience in:
        </h3>
        <ul>
            <li><Icon icon='devicon:html5' />HTML<span>/</span><Icon icon='devicon:php' />PHP <span>(</span><Icon icon='cib:wordpress' />WordPress<span>...</span><span>)</span></li>
            <li><Icon icon='devicon:css3' />CSS<span>/</span><Icon icon='cib:sass' color='#CD6799' />Sass <span>(</span><Icon icon='devicon:tailwindcss' />Tailwind<span>/</span><Icon icon='devicon:bootstrap' />Bootstrap<span>...</span><span>)</span></li>
            <li><Icon icon='devicon:javascript' />JS<span>/</span><Icon icon='devicon:typescript' />TS <span>(</span><Icon icon='devicon:react' />React<span>/</span><Icon icon='devicon:nextjs' />Next.js<span>/</span><Icon icon='devicon:svelte' />Svelte<span>...</span><span>)</span></li>
            <li><Icon icon='devicon:nodejs' />Node.js <span>(</span><Icon icon='devicon:express' />Express, <Icon icon='devicon-plain:axios' color='#5a29e4' />Axios<span>...</span><span>)</span></li>
            <li><Icon icon='devicon:git' />Git<span>/</span><Icon icon='devicon:github' />GitHub<span>/</span><Icon icon='devicon:gitlab' />GitLab</li>
        </ul>
    </section>
</section>

<style>
    img {
        width: 15rem;
        height: 15rem;
        border: .25rem solid var(--color-purple-light);
        border-radius: 50%;
    }

    section {
        > section, p, ul {
            &:not(:last-child) {
                margin-bottom: 1em;
            }
        }
    }

    p {
        max-width: 50em;
        font-size: 1.25em;

        @media (width >= 48rem) {
            text-align: justify;
        }
    }

    li {
        display: flex;
        align-items: center;
        gap: .5em;
    }
</style>