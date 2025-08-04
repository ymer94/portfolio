<script lang='ts'>
	import paths from '$lib/helpers/paths.svelte'
	import Icon from '@iconify/svelte';
</script>

<img src={ paths.addBase('/img/profile.png') } alt='Anime style portrait of Ymer Nordström.'>
<section>
    <h1>Ymer Nordström</h1>
    <h2>Software developer</h2>
    <p>
        I'm a general software developer with a passion for creating customized solutions
        directly against end users. In my years I have worked in a number of different teams,
        languages & environments.
    </p>
    <p>
        I have a background as a Java developer, but I am now expanding my skills with a front-end education at Medieinstitutet. My passion for technology and helping people is what drives me in this industry. In addition, I am meticulous and have an easy time simplifying complex tasks.
    </p>
    <p>
        To see more of my school work, head on over to my
        <a href={ paths.addBase('/projects') }>
            <Icon icon="mdi:terminal"/>
            <span>projects</span>
        </a>
        page.
    </p>
</section>
<section>
    <h3>
        Experienced in:
    </h3>
    <ul>
        <li>            
            <Icon icon='devicon:html5' />HTML
            <span>/</span>
            <Icon icon='devicon:php' />PHP
            <span>(</span>
            <Icon icon='cib:wordpress' />WordPress
            <span>...</span>
            <span>)</span>
        </li>
        <li>
            <Icon icon='devicon:css3' />CSS
            <span>/</span>
            <Icon icon='cib:sass' color='#CD6799' />Sass
            <span>(</span>
            <Icon icon='devicon:tailwindcss' />Tailwind
            <span>/</span>
            <Icon icon='devicon:bootstrap' />Bootstrap
            <span>...</span>
            <span>)</span>
        </li>
        <li>
            <Icon icon='devicon:javascript' />JS
            <span>/</span>
            <Icon icon='devicon:typescript' />TS
            <span>(</span>
            <Icon icon='devicon:react' />React
            <span>/</span>
            <Icon icon='devicon:nextjs' />Next.js
            <span>/</span>
            <Icon icon='devicon:svelte' />Svelte
            <span>...</span>
            <span>)</span>
        </li>
        <li>
            <Icon icon='devicon:nodejs' />Node.js 
            <span>(</span>
            <Icon icon='devicon:express' />Express, 
            <Icon icon='devicon-plain:axios' color='#5a29e4' />Axios
            <span>...</span>
            <span>)</span>
        </li>
        <li>
            <Icon icon='devicon:git'/>Git
            <span>/</span>
            <Icon icon='devicon:github' />GitHub
            <span>/</span>
            <Icon icon='devicon:gitlab' />GitLab
        </li>
    </ul>
</section>

<style>
    img {
        width: 15rem;
        height: 15rem;
        border: .25rem solid var(--color-purple-light);
        border-radius: 50%;
    }

    section, p, ul {
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }

    p, ul {
        max-width: 50em;
        width: 100%;
    }

    section {
        width: 100dvw;
        padding: 0 2rem;

        @media (width >= 48rem) {
            width: 75%;
        }
    }
    
    p {
        font-size: 1.25em;

        @media (width >= 48rem) {
            text-align: justify;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1em;

        > li {
            display: flex;
            align-items: center;
            gap: .5em;
        }
    }
</style>