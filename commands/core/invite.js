const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'invite',
    aliases: ["inv"],
    showHelp: true,
    utilisation: '{prefix}invite',

    execute(client, message) {
        const embed = new Discord.MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(client.user.displayAvatarURL({ size: 1024, dynamic: true }));
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        
        embed.addField(`Davet Linki`, `[Tıkla](https://discord.com/api/oauth2/authorize?client_id=851327748361551873&permissions=8&scope=bot)`);
        embed.addField(`Destek Sunucusu`, `[Tıkla](https://discord.gg/zN5hjyCBJR)`);

        embed.setTimestamp();
        embed.setFooter(`${message.author.tag} Tarafından istendi.`, message.author.avatarURL({ dynamic: true }));

        
        message.channel.send({ embeds: [embed] });
    },
};