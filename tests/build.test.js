const build = require('../app/build/scrapper')

it('Pega todos os dados', async () => {
    const response = await build.getAll('jhin')
    expect(response).toEqual(expect.not.objectContaining({error: true}))
})