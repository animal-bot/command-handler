// Learn how to put events in a seperate folder in the animal-bot/event-handler repo!

module.exports.event = (client, message) => {
    if (message.author.bot) return;
    if (!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES') || !message.channel.permissionsFor(message.guild.me).has('ATTACH_FILES') || !message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return;
    if (message.content.toLowerCase().indexOf(client.prefix) !== 0) return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
    if (!cmd) return;
    cmd.run(client, message, args);
};