import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const libPath = 'src/lib', assetPath = `${libPath}/static`, config = {
	preprocess: [
		vitePreprocess(),
		mdsvex(),
	],
	kit: {
		adapter: adapter(),
		files: {
            appTemplate: 'src/index.html',
			assets: assetPath
        },
		alias: {
			css : `${assetPath}/css`,
			img: `${assetPath}/img`,
			fonts: `${assetPath}/fonts`,
			lib: libPath,
			components: `${libPath}/components`
		}
	 },
	extensions: [
		'.svelte',
		'.svx'
	]
}

export default config