const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log('bot is ready');
});

client.on('message', msg => {
    if(msg.content === 'ping'){
        msg.reply('Pong!');
    }
});

client.login('NjA5Mjg1NzAzNDk0NDAyMDU4.XU0fmQ.OOOVElMx2AfAY0Vcp3HESRZDUhQ');