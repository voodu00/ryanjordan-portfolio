import { defineConfig } from 'astro/config'

import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import spectre from './package/src'

import node from '@astrojs/node'
import { spectreDark } from './src/ec-theme'

// Giscus environment variables removed since giscus is disabled

// https://astro.build/config
const config = defineConfig({
	site: 'https://ryanjordan.dev',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark]
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Ryan Jordan',
			openGraph: {
				home: {
					title: 'Ryan Jordan',
					description: 'My personal website and blog.'
				},
				blog: {
					title: 'Blog',
					description: 'News and guides from Ryan Jordan.'
				},
				projects: {
					title: 'Projects'
				}
			},
			giscus: false
		})
	],
	adapter: node({
		mode: 'standalone'
	})
})

export default config
