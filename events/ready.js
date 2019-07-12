// Evento disparado quando o bot inicia

module.exports = async client => {
    console.log('[log]', `O Bot foi iniciado completamente com ${client.users.size} usuarios em ${client.guilds.size} servidores`)
    
    // Para setar um 'Jogando...' para o bot
    client.user.setPresence({ status: 'online', game: { name: process.env.GAME } })
}