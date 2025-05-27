import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const libPath = 'src/lib', assetPath = `${libPath}/static`, config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		files: {
            appTemplate: 'src/index.html',
			assets: assetPath
        },
		alias: {
			$css : `${assetPath}/css`,
			$img: `${assetPath}/img`,
			$fonts: `${assetPath}/fonts`,
			$lib: libPath,
			$js: `${libPath}/js`,
			$components: `${libPath}/components`
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : ''
		}
	 },
	extensions: ['.svelte', '.svx']
};

export default config