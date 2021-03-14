describe('Locations', () => {
	let variable = 0
	beforeAll(() => {
		variable++
	})

	it('should expose AdTarget api object on window object', async () => {
		await expect(variable).toEqual(1)
	})
})
