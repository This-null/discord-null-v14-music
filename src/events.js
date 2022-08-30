player.on('error', (queue, error) => {
    console.log(`Kuyruktan yayılan hata${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Bağlantıdan yayılan hata ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Oynamaya başladı \`${track.title}\` in **${queue.connection.channel.name}** `);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Parça \`${track.title}\` sıraya eklendi`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Ses kanalından el ile bağlantım kesildi, sırayı temizledim...');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Ses kanalında kimse yok, ses kanalından ayrılıyor...');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Tüm kuyruğu okumayı bitirdim.');
});