const build = require('../../app/build/scrapper')

// Testes getAll
it('[BUILD/SRP] getAll - Pega todos os dados - Sucesso', async () => {
    const response = await build.getAll('kaisa')
    expect(response).toEqual(expect.not.objectContaining({error: true}))
})

it('[BUILD/SRP] getAll - Pega todos os dados - Com erro por apostrofo', async () => {
    const response = await build.getAll('kai\'sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getAll - Pega todos os dados - Com erro por espaço', async () => {
    const response = await build.getAll('kai sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getAll - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getAll('kai\"sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getAll - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getAll('kaisra')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'Error on search this champion'}))
})

// Testes getItems
it('[BUILD/SRP] getItems - Pega todos os dados - Sucesso', async () => {
    const response = await build.getItems('kaisa')
    expect(response).toEqual(expect.not.objectContaining({error: true}))
})

it('[BUILD/SRP] getItems - Pega todos os dados - Com erro por apostrofo', async () => {
    const response = await build.getItems('kai\'sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getItems - Pega todos os dados - Com erro por espaço', async () => {
    const response = await build.getItems('kai sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getItems - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getItems('kai\"sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getItems - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getItems('kaisra')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'Error on search this champion'}))
})

// Testes getRunes
it('[BUILD/SRP] getRunes - Pega todos os dados - Sucesso', async () => {
    const response = await build.getRunes('kaisa')
    expect(response).toEqual(expect.not.objectContaining({error: true}))
})

it('[BUILD/SRP] getRunes - Pega todos os dados - Com erro por apostrofo', async () => {
    const response = await build.getRunes('kai\'sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getRunes - Pega todos os dados - Com erro por espaço', async () => {
    const response = await build.getRunes('kai sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getRunes - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getRunes('kai\"sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getRunes - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getRunes('kaisra')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'Error on search this champion'}))
})

// Testes getSkillOrder
it('[BUILD/SRP] getSkillOrder - Pega todos os dados - Sucesso', async () => {
    const response = await build.getSkillOrder('kaisa')
    expect(response).toEqual(expect.not.objectContaining({error: true}))
})

it('[BUILD/SRP] getSkillOrder - Pega todos os dados - Com erro por apostrofo', async () => {
    const response = await build.getSkillOrder('kai\'sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getSkillOrder - Pega todos os dados - Com erro por espaço', async () => {
    const response = await build.getSkillOrder('kai sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getSkillOrder - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getSkillOrder('kai\"sa')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'The champion name can not contain a \',\" or spaces'}))
})

it('[BUILD/SRP] getSkillOrder - Pega todos os dados - Com erro por aspas', async () => {
    const response = await build.getSkillOrder('kaisra')
    expect(response).toEqual(expect.objectContaining({error: true}))
    expect(response).toEqual(expect.objectContaining({message: 'Error on search this champion'}))
})