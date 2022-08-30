const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require('croxydb');
const emoji = client.config.app.tik;
const ampul = client.config.app.ampul;
const beat = client.config.app.beatm



module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        let prefix; 
        let prefixes =  db.fetch(`prefix_${message.guild.id}`);
        if(prefixes == null) {
          prefix = client.config.app.px 
        } else {
          prefix = prefixes;
        }


let buton = new MessageButton()
.setStyle("PRIMARY")
.setEmoji(beat)
.setCustomId("music")

let buton2 = new MessageButton()
.setStyle("SECONDARY")
.setLabel("Close")
.setEmoji("❌")
.setCustomId("ekmek")

const buton3 = new MessageButton()
.setLabel('Discord')
.setStyle('LINK')
.setURL('https://discord.gg/zN5hjyCBJR');

const buton4 = new MessageButton()
.setLabel('Web Site')
.setStyle('LINK')
.setURL('https://harmonydc.xyz');

message.react(emoji).catch(e => { });
        
        let embed = new MessageEmbed()
        .setTitle('Harmony | Help Menu', true)
        .addField("for music commands","click the button.")
        .setColor("#080808")
        .setThumbnail("https://cdn.discordapp.com/attachments/823550703058288682/938876525229510666/89a272c4a8a028cf11aea4ad6cb50a51.png")
        
        message.channel.send({embeds: [embed], components: [new MessageActionRow({ components: [buton, buton3, buton4]})]}).then(async msg => {
        
        const filter = x => x.user.id === message.author.id
        let collector = msg.createMessageComponentCollector({ filter, time: 300000 })
        
        collector.on("collect", async button => {
        if(button.customId === "music") {

        let music = new MessageEmbed()
        .setTitle('Harmony | Music Menu', true)
        .addField(`\`${prefix}help\``, `aliases (\`${prefix}h\`)`, true)
        .addField(`\`${prefix}invite\``, `aliases (\`${prefix}inv\`)`, true)
        .addField(`\`${prefix}ping\``, `aliases (\`${prefix}ping\`)`, true)
        .addField(`\`${prefix}prefix\``, `aliases (\`${prefix}pf\`)`, true)
        .addField(`\`${prefix}back\``, `aliases (\`${prefix}previous\`)`, true)
        .addField(`\`${prefix}clear\``, `aliases (\`${prefix}cq\`)`, true)
        .addField(`\`${prefix}filter\``, `aliases (\`${prefix}filter\`)`, true)
        .addField(`\`${prefix}loop\``, `aliases (\`${prefix}lp\`)`, true)
        .addField(`\`${prefix}nowplaying\``, `aliases (\`${prefix}np\`)`, true)
        .addField(`\`${prefix}pause\``, `aliases (\`${prefix}pause\`)`, true)
        .addField(`\`${prefix}play\``, `aliases (\`${prefix}p\`)`, true)
        .addField(`\`${prefix}progress\``, `aliases (\`${prefix}pbar\`)`, true)
        .addField(`\`${prefix}queue\``, `aliases (\`${prefix}q\`)`, true)
        .addField(`\`${prefix}resume\``, `aliases (\`${prefix}rs\`)`, true)
        .addField(`\`${prefix}save\``, `aliases (\`${prefix}sv\`)`, true)
        .addField(`\`${prefix}search\``, `aliases (\`${prefix}sh\`)`, true)
        .addField(`\`${prefix}seek\``, `aliases (\`${prefix}seek\`)`, true)
        .addField(`\`${prefix}shuffle\``, `aliases (\`${prefix}shf\`)`, true)
        .addField(`\`${prefix}skip\``, `aliases (\`${prefix}sk\`)`, true)
        .addField(`\`${prefix}stop\``, `aliases (\`${prefix}dc\`)`, true)
        .addField(`\`${prefix}volume\``, `aliases (\`${prefix}vol\`)`, true)

      

        .setThumbnail("https://cdn.discordapp.com/attachments/823550703058288682/938876525229510666/89a272c4a8a028cf11aea4ad6cb50a51.png")
        
        msg.edit({embeds: [music], components: [new MessageActionRow({ components: [buton3, buton4, buton2]})]})
        
        }
        if(button.customId === "ekmek") {
            
            
            if(msg){msg.delete();} 
            
            }

        
        
        button.deferUpdate();
        })
        
            })
        }


};