// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (globalConfig: never) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
	return await setupPuppeteer(globalConfig)
}
