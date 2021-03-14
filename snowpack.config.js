const { compilerOptions } = require('./tsconfig.json')

module.exports = {
	mount: {},
	plugins: [
		[
			'@snowpack/plugin-run-script',
			{
				name: 'Lint Scripts',
				cmd: 'npm run lint:scripts',
				watch: 'npm run lint:scripts:watch',
				output: 'dashboard',
			},
		],
		[
			'@snowpack/plugin-run-script',
			{
				name: 'Lint Styles',
				cmd: 'npm run lint:styles',
				watch: 'npm run lint:styles:watch',
				output: 'dashboard',
			},
		],
		[
			'@snowpack/plugin-run-script',
			{
				name: 'Lint Svelte',
				cmd: 'npm run lint:svelte',
				watch: 'npm run lint:svelte:watch',
				output: 'dashboard',
			},
		],
		[
			'@snowpack/plugin-svelte',
			{
				hmrOptions: {
					preserveLocalState: true,
				},
			},
		],
	],
	routes: [
		{ src: '/', dest: 'public/index.html' },
		...Object.keys(compilerOptions.paths).map(path => {
			return { src: path, dest: compilerOptions.paths[path][0] }
		}),
	],
	optimize: {},
	packageOptions: {},
	devOptions: {},
	buildOptions: {},
}
