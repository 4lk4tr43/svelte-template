module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: ['svelte3', '@typescript-eslint', 'prettier'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
		{
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'prettier',
			],
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2020,
				project: './tsconfig.json',
				sourceType: 'module',
			},
			rules: {
				'@typescript-eslint/no-unsafe-call': 0,
				'@typescript-eslint/no-unsafe-member-access': 0,
				'prettier/prettier': 'error',
			},
		},
	],
	rules: {
		'prettier/prettier': 'error',
	},
	settings: {},
}
