const ms = require('ms');

module.exports = {
    name: 'ping',
    showHelp: false,
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago **${client.ws.ping}ms**  🛰️`);
    },
};