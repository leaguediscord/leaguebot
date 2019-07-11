// Evento quando o bot recebe uma mensagem

module.exports = async (client, message) => {
  
  // Para que o bot não entre em looping com outros bots
  if (message.author.bot) return

  // Ignorando mensagens que não tem o prefixo do bot
  if (message.content.indexOf(process.env.PREFIX) !== 0) return

  // Pegando comando e args da mensagem
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)

  // Pegando tirando comando dos args e passando para minusculo
  const cmd = args.shift().toLowerCase()

  // Pegando comando da collection de comandos
  const command = client.commands.get(cmd)

  // Se ele não encotrar ele retorna
  if (!command) return

  // Exibindo log do comando executado
  console.log('[log]', `${message.author.username} (${message.author.id}) executou o comando: ${command.help.name} com os args: ${args}`)

  // Executando comando
  command.run(client, message, args)
}
