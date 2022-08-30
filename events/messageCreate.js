const db = require('croxydb');



module.exports = (client, message) => {


    if (message.author.bot || message.channel.type === 'dm') return;
    let prefix; 
    let prefixes =  db.fetch(`prefix_${message.guild.id}`);
    if(prefixes == null) {
      prefix = client.config.app.px 
    } else {
      prefix = prefixes;
    }

  
 
    if (!message.content.startsWith(prefix) || !message.guild) return;
    const command = message.content.split(' ')[0].substr(prefix.length);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    const DJ = client.config.opt.DJ;

    if (cmd && DJ.enabled && DJ.commands.includes(cmd.name)) {
   
        const roleDJ = message.guild.roles.cache.find(x => x.name === DJ.roleName);

        if (!message.member._roles.includes(roleDJ.id)) {
            return message.channel.send(`Bu komut aşağıdaki komutlara sahip üyeler için ayrılmıştır: ${DJ.roleName} sunucudaki rol ${message.author}... tekrar dene ? ❌`);
        }
    }

    if (cmd && cmd.voiceChannel) {
        if (!message.member.voice.channel) return message.channel.send(`Ses kanalında değilsin. ${message.author}... tekrar dene ? ❌`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Aynı ses kanalında değilsiniz. ${message.author}... tekrar dene ? ❌`);
    }
       


    

    if (cmd) cmd.execute(client, message, args);

};