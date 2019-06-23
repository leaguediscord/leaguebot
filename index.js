require('dotenv').config()
const Discord = require('discord.js')

const client = new Discord.Client()

// logando na conta do bot
client.login(process.env.DISCORD_TOKEN)