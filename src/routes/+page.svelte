<script lang='ts'>
	import paths from '$lib/helpers/paths.svelte'
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
            Some of my experience:
        </h3>
        <ul>
            <li>HTML/PHP (WordPress...)</li>
            <li>CSS/Sass (Tailwind/Bootstrap...)</li>
            <li>JS/TS (React/Next/Svelte...)</li>
            <li>Node.js (Express, Axios...)</li>
            <li>Git/GitHub/GitLab</li>
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
</style>