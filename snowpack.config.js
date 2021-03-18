const { compilerOptions } = require('./tsconfig.json')

module.exports = {
	mount: {},
	plugins: [
		[
			'@snowpack/plugin-run-script',
			{
				name: 'Lint Prettier',
				cmd: 'npm run lint:prettier',
				watch: 'npm run lint:prettier:watch',
				output: 'dashboard',
			},
		],
		[
			'@snowpack/plugin-run-script',
			{
				name: 'Lint Eslint',
				cmd: 'npm run lint:scripts',
				watch: 'npm run lint:scripts:watch',
				output: 'dashboard',
			},
		],
		[
			'@snowpack/plugin-run-script',
			{
				name: 'Lint Stylelint',
				cmd: 'npm run lint:stylelint',
				watch: 'npm run lint:stylelint:watch',
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
