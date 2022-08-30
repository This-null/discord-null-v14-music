module.exports = {
    app: {
        px: '.',
        token: '',
        playing: '.play',
        tik: '<a:onay:826781279973539870>',
        ampul: '<a:ampul:928731473916342402>',
        beatm: '<a:beatm:987588455284477962>',
        sahip: '769979665224958020'

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 200,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
