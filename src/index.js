const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`bot is ready as ${client.user.tag}`);
});

client.on('message', msg => {
    //a ver al cine prro.
    if(msg.content.includes('a ver')){
        msg.channel.send('al cine prro');
    }
    if(msg.content.includes('A ver')){
        msg.channel.send('Al cine prro');
    }
    //comando que inserta una foto de pibi.
    if(msg.content === '!pibi'){
        msg.channel.send('https://cdn.discordapp.com/attachments/423743123357958144/608569014926704660/unknown.png');
    }
    //el bot contesta a oc cuando sigur escribe
    if(msg.user.tag === 'Pibi#0120'){
        msg.channel.send('a oc');
    }

});

client.login('NjA5Mjg1NzAzNDk0NDAyMDU4.XU0fmQ.OOOVElMx2AfAY0Vcp3HESRZDUhQ');