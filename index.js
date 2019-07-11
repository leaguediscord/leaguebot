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
console.log('[log]', `Carregando o total de ${commandsDir.length} comandos`)

// Percorrendo a lista de diretorios 
commandsDir.forEach(commandDir => {
  try {

    // Importando comando
    const command = require(`./app/${commandDir}/commands`)
    console.log('[log]', `Carregando comando: ${command.help.name}`)

    // Salvando na collection
    client.commands.set(command.help.name, command)

  } catch (err) {
    console.log('[error]', `${commandDir}: ${err}`)
  }
})

// Lista o diretorio de evento
const eventFiles = readdirSync('./events/')
console.log('[log]', `Carregando o total de ${eventFiles.length} eventos`)

// Percorrendo arquivos de eventos
eventFiles.forEach(eventFile => {

  // Pegando o nome do arquivo
  const eventName = eventFile.split('.')[0]

  // Importando o evento
  const event = require(`./events/${eventFile}`)

  // Criando o evento para o cliente discord
  client.on(eventName, event.bind(null, client))
})


// Função para caso aconteça um erro
client.on('error', (err) => {
  console.log('[error]', err)
})

// Logando na conta do client
client.login(process.env.DISCORD_TOKEN)