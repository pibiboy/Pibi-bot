const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`bot is ready as ${client.user.tag}`);
});

client.on('message', msg => {
    if(msg.content === 'a ver' || 'aver'){
        msg.reply('al cine prro');
    }
});

client.login('NjA5Mjg1NzAzNDk0NDAyMDU4.XU0fmQ.OOOVElMx2AfAY0Vcp3HESRZDUhQ');