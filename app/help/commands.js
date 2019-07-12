
module.exports = {
    run: (client, message, args) => {

        let embed = {
        color: 0x993399,
        title: 'Lista de Comandos LeagueBot',
        url: 'https://github.com/leaguediscord/leaguebot',
        description: 'Todos os comandos disponíveis',
        fields: []
      }

      client.commands.forEach(command => {
        if (command.alias) return
        embed.fields.push(
          {
            name: `**${process.env.PREFIX}${command.help.name}**`,
            value: `**Descrição**: ${command.help.description}\n**Como Usar**: ${process.env.PREFIX} ${command.help.usage}`
          }
        )
      })
  
      message.author.send({ embed: embed })
        .then(() => message.react('👌'))
        .catch(() => message.reply('Desculpe, mas eu não tenho permissões para enviar mensagens por DM para você!'))
    },
  
    conf: {},
  
    help: {
      name: 'help',
      category: 'Help',
      description: 'Mostra todos os comandos disponíveis do bot.',
      usage: 'help'
    }
  }
  