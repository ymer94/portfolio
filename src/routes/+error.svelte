<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="error-container">
    <h1>{$page.status}: {$page.error?.message}</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <a href="/">Go back home</a>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding: 0 1rem;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    a {
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border: 2px solid currentColor;
        border-radius: 4px;
        transition: all 0.3s ease;
    }

    a:hover {
        background-color: currentColor;
        color: var(--bg-color, white);
    }
</style>