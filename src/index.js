const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`bot is ready as ${client.user.tag}`);
});

//a ver al cine prro.
client.on('message', msg => {
    if(msg.content.includes('a ver')){
        msg.channel.send('a ver al cine prro');
    }
});

/*client.on('message', msg => {
    if((msg.content === 'hola')||(msg.content === 'A ver')){
        msg.channel.send(`hola ${msg.author}`);
    }
});*/

//comando que inserta una foto de pibi.
client.on('message', msg => {
    if(msg.content === '!pibi'){
        msg.channel.send('https://cdn.discordapp.com/attachments/423743123357958144/608569014926704660/unknown.png');
    }
});

client.login('NjA5Mjg1NzAzNDk0NDAyMDU4.XU0fmQ.OOOVElMx2AfAY0Vcp3HESRZDUhQ');