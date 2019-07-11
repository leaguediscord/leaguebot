// Importando modulos
require('dotenv').config()
const Discord = require('discord.js')
const { readdirSync } = require('fs')
const Enmap = require('enmap')

// Criando variavel cliente do discord
const client = new Discord.Client()

// Prepara para criar uma collection de comandos, isso será acessado no middleware de mensagens
client.commands = new Enmap()

// Guarda o timestamp do inicio para medir o uptime
client.startTime = Date.now()

// Lista todos os diretorios que contém arquivos commands.js
const commandsDir = readdirSync('./app/')
console.log('log', `Carregando o total de ${commandsDir.length} comandos.`)

// Percorrendo a lista de diretorios 
commandsDir.forEach(commandDir => {
  try {
    const command = require(`./app/${commandDir}/commands`)
    console.log('log', `Carregando comando: ${command.help.name}`)

    if (command.init) command.init(client)

    client.commands.set(command.help.name, command)
    if (command.help.aliases) {
      command.alias = true
      command.help.aliases.forEach(alias => client.commands.set(alias, command))
    }
  } catch (err) {
    console.log(`${commandDir}: ${err}`)
  }
})

/** Então carregamos o evento quase do mesmo modo que o processo dos comandos. */
const evtFiles = readdirSync('./events/')
console.log('log', `Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  const event = require(`./events/${f}`)

  client.on(eventName, event.bind(null, client))
})

client.on('error', (err) => {
  console.log('error', err)
})

// Logando na conta do client
client.login(process.env.DISCORD_TOKEN)