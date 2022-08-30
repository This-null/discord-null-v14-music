const moment = require('moment');
require("moment-duration-format");



module.exports = async (client) => {

    setInterval(() => {
		
		   var tarih = ''
          if(moment().format('MM') === '01') {
              var tarih = `${moment().format('DD')} Ocak ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '02') {
              var tarih = `${moment().format('DD')} Şubat ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '03') {
              var tarih = `${moment().format('DD')} Mart ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '04') {
              var tarih = `${moment().format('DD')} Nisan ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '05') {
              var tarih = `${moment().format('DD')} Mayıs ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '06') {
              var tarih = `${moment().format('DD')} Haziran ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '07') {
              var tarih = `${moment().format('DD')} Temmuz ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '08') {
              var tarih = `${moment().format('DD')} Ağustos ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '09') {
              var tarih = `${moment().format('DD')} Eylül ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '10') {
              var tarih = `${moment().format('DD')} Ekim ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '11') {
              var tarih = `${moment().format('DD')} Kasım ${moment().format('YYYY')} `
          }
          if(moment().format('MM') === '12') {
              var tarih = `${moment().format('DD')} Aralık ${moment().format('YYYY')} `
          }

		
		
      const oynuyor = [
            `Tarih ${tarih}`,
            `${client.config.app.px}play`,
            `${client.config.app.px}help`,
            `${client.guilds.cache.size} sunucuda ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet.`
        ];
        const oyun = Math.floor(Math.random() * (oynuyor.length));
        client.user.setActivity(`${oynuyor[oyun]}`, {type: "LISTENING"});
    }, 10000);
        client.user.setStatus("idle");
		console.log(`Adam null kullanıyor`)
		console.log(`Kalite içerisindesin dostum.`)
        console.log(`${client.user.tag} olarak giriş yapıldı.`);
        console.log(`${client.guilds.cache.size} sunucuda ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet.`)

};