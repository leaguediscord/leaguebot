const cheerio = require('cheerio')
const axios = require('axios')
const utilRunes = require('../../utils/runes')

module.exports = {
    getAll: async givenChampion => {
        try{

            givenChampion = givenChampion.toLowerCase()
            if (/(['" ])/g.test(givenChampion)) return({error: true, message: 'The champion name can not contain a \',\" or spaces'})

            // Fazendo a requisicao para o champion.gg
            const res = await axios.get(`https://champion.gg/champion/${givenChampion}/`)
            const $ = cheerio.load(res.data)

            // Pegando itens
            const items = []
            const itemBox = $('.build-wrapper').find('a')
            items.push(itemBox.attr('href').substring(38))
            items.push(itemBox.next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().next().next().next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().next().next().next().next().next().next().attr('href').substring(38))
        
            // Pegando runas
            const runes = {
                primary: [], 
                secondary: [], 
                additional:[]
            }

            // Primarias
            const runeBox = $('#primary-path').find('.Slot__Block-epLguL')
            runes.primary.push(runeBox.find('.Description__Title-jfHpQH').html())

            // Pegando a arvore da runa
            let runeTree = runeBox.find('.Description__Title-jfHpQH').html()

            // Pegando a runa e adicionando o novo texto
            let rune = utilRunes.runeCheck(runeTree, runeBox.next().find('.Description__Title-jfHpQH').html())
            rune.error ? runes.primary.push(rune.message) : runes.primary.push(rune.rune)

            // Pegando a runa e adicionando o novo texto (tive q criar outra variavel porque reutilizando rune nao tava pegando, o codigo simplesmente nao executava)
            let rune2 = utilRunes.runeCheck(runeTree, runeBox.next().next().find('.Description__Title-jfHpQH').html())
            rune2.error ? runes.primary.push(rune2.message) : runes.primary.push(rune2.rune)

            // Pegando a runa e adicionando o novo texto (tive q criar outra variavel porque reutilizando rune nao tava pegando, o codigo simplesmente nao executava)
            let rune3 = utilRunes.runeCheck(runeTree, runeBox.next().next().next().find('.Description__Title-jfHpQH').html())
            rune3.error ? runes.primary.push(rune3.message) : runes.primary.push(rune3.rune)

            // Pegando a runa e adicionando o novo texto (tive q criar outra variavel porque reutilizando rune nao tava pegando, o codigo simplesmente nao executava)
            let rune4 = utilRunes.runeCheck(runeTree, runeBox.next().next().next().next().find('.Description__Title-jfHpQH').html())
            rune4.error ? runes.primary.push(rune4.message) : runes.primary.push(rune4.rune)

            // Secundarias
            const runeBox2 = $('#secondary-path').find('.Slot__Block-epLguL')
            runes.secondary.push(runeBox2.find('.Description__Title-jfHpQH').html())

            // Pegando a arvore da runa
            let runeTree2 = runeBox2.find('.Description__Title-jfHpQH').html()

            // Pegando a runa e adicionando o novo texto
            let rune5 = utilRunes.runeCheck(runeTree2, runeBox2.next().find('.Description__Title-jfHpQH').html())
            rune5.error ? runes.secondary.push(rune5.message) : runes.secondary.push(rune5.rune)

            // Pegando a runa e adicionando o novo texto
            let rune6 = utilRunes.runeCheck(runeTree2, runeBox2.next().find('.Slot__Block-epLguL').next().find('.Description__Title-jfHpQH').html())
            rune6.error ? runes.secondary.push(rune6.message) : runes.secondary.push(rune6.rune)
            
            // Adicional
            let runeTree3 = 'Additional'

            // Pegando a runa e adicionando o novo texto
            let rune7 = utilRunes.runeCheck(runeTree3, runeBox2.next().next().find('.Description__Title-jfHpQH').html())
            rune7.error ? runes.additional.push(rune7.message) : runes.additional.push(rune7.rune)

            // Pegando a runa e adicionando o novo texto
            let rune8 = utilRunes.runeCheck(runeTree3, runeBox2.next().prev().last().find('.Description__Title-jfHpQH').html())
            rune8.error ? runes.additional.push(rune8.message) : runes.additional.push(rune8.rune)

            // Pegando a runa e adicionando o novo texto
            let rune9 = utilRunes.runeCheck(runeTree3, runeBox2.next().next().last().find('.Description__Title-jfHpQH').html())
            rune9.error ? runes.additional.push(rune9.message) : runes.additional.push(rune9.rune)

            // Pegando skills
            const skills = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]

            let count = 0

            const skillBox = $('.skill-order').find('.skill').next()
            const skillItem = skillBox.find('.skill-selections').each((item,value) => {
                value.children.forEach(innerItem => { 
                    if(innerItem.attribs != undefined){
                        innerItem.attribs.class === 'selected' ? skills[count].push('X') : skills[count].push('-')
                    }
                })
                count++
            })

            skills.pop()
            skills.pop()
            skills.pop()
            skills.pop()
            
            // Preparando resposta
            const champion = {
                items,
                runes,
                skills
            }

            return champion

        }catch(err){
            return {error: true, message: 'Error on search this champion'}
        }
    },

    getItems: async givenChampion => {
        try{

            givenChampion = givenChampion.toLowerCase()
            if (/(['" ])/g.test(givenChampion)) return({error: true, message: 'The champion name can not contain a \',\" or spaces'})

            const res = await axios.get(`https://champion.gg/champion/${givenChampion}/`)
            const $ = cheerio.load(res.data)

            // Pegando itens
            const items = []
            const itemBox = $('.build-wrapper').find('a')
            items.push(itemBox.attr('href').substring(38))
            items.push(itemBox.next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().next().next().next().next().attr('href').substring(38))
            items.push(itemBox.next().next().next().next().next().next().next().next().next().next().attr('href').substring(38))

            // Preparando resposta
            const champion = {
                items
            }

            return champion

        }catch(err){
            return {error: true, message: 'Error on search this champion'}

        }
    },

    getRunes: async givenChampion => {
        try{

            givenChampion = givenChampion.toLowerCase()
            if (/(['" ])/g.test(givenChampion)) return({error: true, message: 'The champion name can not contain a \',\" or spaces'})

            const res = await axios.get(`https://champion.gg/champion/${givenChampion}/`)
            const $ = cheerio.load(res.data)
        
            // Pegando runas
            const runes = {
                primary: [], 
                secondary: [], 
                additional:[]
            }

            // Primarias
            const runeBox = $('#primary-path').find('.Slot__Block-epLguL')
            runes.primary.push(runeBox.find('.Description__Title-jfHpQH').html())
            runes.primary.push(runeBox.next().find('.Description__Title-jfHpQH').html())
            runes.primary.push(runeBox.next().next().find('.Description__Title-jfHpQH').html())
            runes.primary.push(runeBox.next().next().next().find('.Description__Title-jfHpQH').html())
            runes.primary.push(runeBox.next().next().next().next().find('.Description__Title-jfHpQH').html())

            // Secundarias
            const runeBox2 = $('#secondary-path').find('.Slot__Block-epLguL')
            runes.secondary.push(runeBox2.find('.Description__Title-jfHpQH').html())
            runes.secondary.push(runeBox2.next().find('.Description__Title-jfHpQH').html())
            runes.secondary.push(runeBox2.next().find('.Slot__Block-epLguL').next().find('.Description__Title-jfHpQH').html())
            
            // Falta o ultimo
            
            // Adicional
            runes.additional.push(runeBox2.next().next().find('.Description__Title-jfHpQH').html())
            runes.additional.push(runeBox2.next().prev().last().find('.Description__Title-jfHpQH').html())
            runes.additional.push(runeBox2.next().next().last().find('.Description__Title-jfHpQH').html())

            // Preparando resposta
            const champion = {
                runes
            }

            return champion

        }catch(err){
            return {error: true, message: 'Error on search this champion'}
        }
    },

    getSkillOrder: async givenChampion => {
        try{

            givenChampion = givenChampion.toLowerCase()
            if (/(['" ])/g.test(givenChampion)) return({error: true, message: 'The champion name can not contain a \',\" or spaces'})
            
            const res = await axios.get(`https://champion.gg/champion/${givenChampion}/`)
            const $ = cheerio.load(res.data)

            // Pegando skills
            const skills = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]

            let count = 0

            const skillBox = $('.skill-order').find('.skill').next()
            const skillItem = skillBox.find('.skill-selections').each((item,value) => {
                value.children.forEach(innerItem => { 
                    if(innerItem.attribs != undefined){
                        innerItem.attribs.class === 'selected' ? skills[count].push('X') : skills[count].push('-')
                    }
                })
                count++
            })

            skills.pop()
            skills.pop()
            skills.pop()
            skills.pop()
            
            // Preparando resposta
            const champion = {
                skills
            }

            return champion

        }catch(err){
            return {error: true, message: 'Error on search this champion'}
        }
    }
}
