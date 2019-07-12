/**
* O Comando "howtoask" vai enviar uma mensagem ao usuário mostrando como o mesmo deve realizar uma pergunta.
*/
const scrapper = require('./scrapper')


module.exports = {
  /**
    * Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
    * Que passará os argumentos atraves do middleware que programamos.
    */
  run: async (client, message, args) => {
    try{
    const response = await scrapper.getAll(args[0])

    // Criando embed que sera enviado para o usuário
    let embedItems = {
      title: `Items ${args[0]}`,
      description: `${response.items[0]} -> ${response.items[1]} -> ${response.items[2]} -> ${response.items[3]} -> ${response.items[4]} -> ${response.items[5]}`,
      color: 0x008000
    }

    // Aqui será enviado o embed no canal que o usuário exdecuto o comando
    message.author.send({ embed: embedItems })

    // Criando embed que sera enviado para o usuário
    let embedRunes = {
      title: `Runes ${args[0]}`,
      description: `Primary: (${response.runes.primary[0]})\n${response.runes.primary[1]}\n${response.runes.primary[2]}\n${response.runes.primary[3]}\n${response.runes.primary[4]}\n\nSecondary: (${response.runes.secondary[0]})\n${response.runes.secondary[1]}\n${response.runes.secondary[2]}\n\nAdditional:\n${response.runes.additional[0]}\n${response.runes.additional[1]}\n${response.runes.additional[2]}`,
      color: 0x008000
    }

    message.author.send({ embed: embedRunes })

    // Criando embed que sera enviado para o usuário
    let embedSkill = {
      title: `Skill Order ${args[0]}`,
      description: 
      `
      \`\`\`
      Skill Order ${args[0]}

     1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 
Q   -${response.skills[0][0]}--${response.skills[0][1]}--${response.skills[0][2]}--${response.skills[0][3]}--${response.skills[0][4]}--${response.skills[0][5]}--${response.skills[0][6]}--${response.skills[0][7]}--${response.skills[0][8]}--${response.skills[0][9]}--${response.skills[0][10]}--${response.skills[0][11]}--${response.skills[0][12]}--${response.skills[0][13]}--${response.skills[0][14]}--${response.skills[0][15]}--${response.skills[0][16]}--${response.skills[0][17]}-
W   -${response.skills[1][0]}--${response.skills[1][1]}--${response.skills[1][2]}--${response.skills[1][3]}--${response.skills[1][4]}--${response.skills[1][5]}--${response.skills[1][6]}--${response.skills[1][7]}--${response.skills[1][8]}--${response.skills[1][9]}--${response.skills[1][10]}--${response.skills[1][11]}--${response.skills[1][12]}--${response.skills[1][13]}--${response.skills[1][14]}--${response.skills[1][15]}--${response.skills[1][16]}--${response.skills[1][17]}-
E   -${response.skills[2][0]}--${response.skills[2][1]}--${response.skills[2][2]}--${response.skills[2][3]}--${response.skills[2][4]}--${response.skills[2][5]}--${response.skills[2][6]}--${response.skills[2][7]}--${response.skills[2][8]}--${response.skills[2][9]}--${response.skills[2][10]}--${response.skills[2][11]}--${response.skills[2][12]}--${response.skills[2][13]}--${response.skills[2][14]}--${response.skills[2][15]}--${response.skills[2][16]}--${response.skills[2][17]}-
R   -${response.skills[3][0]}--${response.skills[3][1]}--${response.skills[3][2]}--${response.skills[3][3]}--${response.skills[3][4]}--${response.skills[3][5]}--${response.skills[3][6]}--${response.skills[3][7]}--${response.skills[3][8]}--${response.skills[3][9]}--${response.skills[3][10]}--${response.skills[3][11]}--${response.skills[3][12]}--${response.skills[3][13]}--${response.skills[3][14]}--${response.skills[3][15]}--${response.skills[3][16]}--${response.skills[3][17]}-
      \`\`\`
      `,
      color: 0x000000
    }

    message.author.send(embedSkill.description)
        .then(() => message.react('👌'))
        .catch(() => message.reply('Desculpe, mas eu não tenho permissões para enviar mensagens por DM para você!'))
    }catch(err){
    message.channel.send('Champion not found')
        .then(() => message.react('👌'))
        .catch(() => message.reply('Desculpe, mas eu não tenho permissões para enviar mensagens por DM para você!'))
    }
    
  },
  /**
    * Aqui podemos colocar mais algumas configurações do comando.
    */
  conf: {},

  /** 
    * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...f
    */
  get help () {
    return {
      name: 'build',
      category: 'Builds',
      description: 'Todas as informações sobre a build de um campeão.',
      usage: `build`
    }
  }
}
