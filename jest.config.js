const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
	globalSetup: './test/env/jest.global-once-before.ts',
	globalTeardown: './test/env/jest.global-once-after.ts',
	moduleFileExtensions: ['js', 'json', 'ts'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/',
	}),
	preset: 'jest-puppeteer',
	setupFilesAfterEnv: ['<rootDir>/test/env/jest.setup.ts'],
	testRegex: ['test/(.+)(.spec.[t|j]s)$'],
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
}
