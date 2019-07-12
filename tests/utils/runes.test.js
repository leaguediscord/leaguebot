const runes = require('../../utils/runes')


// Testes getAll
it('[UTIL/RNS] runeCheck - Procura uma runa - Sucesso', async () => {
    const response = runes.runeCheck('Resolve', 'Aftershock')
    expect(response).toEqual(expect.objectContaining({ rune: '[ ][X][ ] Aftershock (Pós-Choque)' }))
})

it('[UTIL/RNS] runeCheck - Procura uma runa - Erro por runa nao encontrada', async () => {
    const response = runes.runeCheck('Resolve', 'Aftereshock')
    expect(response).toEqual(expect.objectContaining({ error: true, message:'Error on getting runes' }))
})

it('[UTIL/RNS] runeCheck - Procura uma runa - Erro por arvore de runas nao encontrada', async () => {
    const response = runes.runeCheck('Resodlve', 'Aftershock')
    expect(response).toEqual(expect.objectContaining({ error: true, message:'Error on getting runes' }))
})
