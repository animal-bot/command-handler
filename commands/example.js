module.exports = {
    name: 'example',
    aliases: ['ex'],
    module: 'example',
    usage: 'example',
    run: async (client, message, args) => {
        message.channel.send('this is an example command')
    }
}