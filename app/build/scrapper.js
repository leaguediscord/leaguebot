const cheerio = require('cheerio')
const axios = require('axios')

exports.getAll = async givenChampion => {
    try{
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
        runes.primary.push(runeBox.next().find('.Description__Title-jfHpQH').html())
        runes.primary.push(runeBox.next().next().find('.Description__Title-jfHpQH').html())
        runes.primary.push(runeBox.next().next().next().find('.Description__Title-jfHpQH').html())
        runes.primary.push(runeBox.next().next().next().next().find('.Description__Title-jfHpQH').html())

        // Secundarias
        const runeBox2 = $('#secondary-path').find('.Slot__Block-epLguL')
        runes.secondary.push(runeBox2.find('.Description__Title-jfHpQH').html())
        runes.secondary.push(runeBox2.next().find('.Description__Title-jfHpQH').html())
        
        // Falta o ultimo
        
        // Adicional
        runes.additional.push(runeBox2.next().next().find('.Description__Title-jfHpQH').html())
        runes.additional.push(runeBox2.next().prev().last().find('.Description__Title-jfHpQH').html())
        runes.additional.push(runeBox2.next().next().last().find('.Description__Title-jfHpQH').html())

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
                    if(innerItem.attribs.class === 'selected'){
                        skills[count].push('X')
                    }else{
                        skills[count].push(' ')
                    }
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
        console.log(err)
        return {error: true}
    }
}
