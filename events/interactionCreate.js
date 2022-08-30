module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Şu anda müzik çalmıyor... tekrar dener misin ? ❌`, ephemeral: true, components: [] });

            int.member.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Müziğin adını size özel mesajlarla gönderdim. ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Size özel mesaj gönderilemiyor... tekrar dener misin ? ❌`, ephemeral: true, components: [] });
            });
        }
    }
};