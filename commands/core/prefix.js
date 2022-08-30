const db = require('croxydb');

module.exports = {
    name: 'prefix',
    aliases: ["pf"],
    showHelp: true,
    utilisation: '{prefix}prefix',

    execute(client, message) {
        const args = message.content.split(' ').slice(1).join(' ');
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`Bu komut için \`ADMINISTRATOR\` yetkisine sahip olman gerek.`).catch((err) => console.log(err))
        if(!args[0]) return message.reply('Prefix belirtin örnek \`!,>,-\` gibi.');
         db.set(`prefix_${message.guild.id}`, args[0])
        message.channel.send(`Yeni sunucu prefixi \`${args[0]}\` olarak değiştirildi. :tada:`)
    },
};