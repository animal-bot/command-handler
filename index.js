const fs = require('fs');

// Other bot code
client.commands = new Discord.Collection(); // Discord should be a discord.js require
fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      if (!file.endsWith('.js')) return;
      const props = require(`./commands/${file}`);
      const commandName = file.split('.')[0];
      console.log(`[NOTICE] Loaded command ${commandName}`);
      client.commands.set(commandName, props);
    });
  });