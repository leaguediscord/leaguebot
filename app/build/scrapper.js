const cheerio = require('cheerio')
const axios = require('axios')

const response = (async () => {
    try{
        const res = await axios.get('https://champion.gg/champion/jhin/')
        const $ = cheerio.load(res.data)

        //Pegando itens
        const items = []
        const itemBox = $('.build-wrapper').find('a')
        items.push(itemBox.attr('href').substring(38))
        items.push(itemBox.next().next().attr('href').substring(38))
        items.push(itemBox.next().next().next().next().attr('href').substring(38))
        items.push(itemBox.next().next().next().next().next().next().attr('href').substring(38))
        items.push(itemBox.next().next().next().next().next().next().next().next().attr('href').substring(38))
        items.push(itemBox.next().next().next().next().next().next().next().next().next().next().attr('href').substring(38))
       
        //Pegando runas
        const runes = {
            primary: [], 
            secondary: [], 
            additional:[]
        }

        //primarias
        const runeBox = $('#primary-path').find('.Slot__Block-epLguL')
        runes.primary.push(runeBox.find('.Description__Title-jfHpQH').html())
        runes.primary.push(runeBox.next().find('.Description__Title-jfHpQH').html())
        runes.primary.push(runeBox.next().next().find('.Description__Title-jfHpQH').html())
        runes.primary.push(runeBox.next().next().next().find('.Description__Title-jfHpQH').html())
        runes.primary.push(runeBox.next().next().next().next().find('.Description__Title-jfHpQH').html())

        //secundarias
        const runeBox2 = $('#secondary-path').find('.Slot__Block-epLguL')
        runes.secondary.push(runeBox2.find('.Description__Title-jfHpQH').html())
        runes.secondary.push(runeBox2.next().find('.Description__Title-jfHpQH').html())
        //falta o ultimo
        
        //adicional
        runes.additional.push(runeBox2.next().next().find('.Description__Title-jfHpQH').html())
        runes.additional.push(runeBox2.next().prev().last().find('.Description__Title-jfHpQH').html())
        runes.additional.push(runeBox2.next().next().last().find('.Description__Title-jfHpQH').html())

        //pegando skills
        skills = {
            Q: [],
            W: [],
            E: [],
            R: []
        }

        const skillBox = $('.skill-order').find('.skill').next()
        skills.Q.push(skillBox.toArray())

        //devolvendo o campeao
        const champion = {
            items,
            runes,
            skills
        }

        let t  =skillBox.find('.skill-selections').toArray()
        t.forEach(item => {

            
            console.log(item.tagName)
        })

        //Pegando skills

    }catch(err){
        console.log(err)
    }
})()
