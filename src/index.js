const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`bot is ready as ${client.user.tag}`);
});

client.on('message', msg => {
    /*if(msg.author.tag === 'caliXer#0186'){
        msg.channel.send('a oc');
    }*/
    if((msg.author.tag === 'Pibi#0120') && (msg.content.includes(''))){
        msg.channel.send('');
    }
    
    if(msg.content.includes('')){
        msg.channel.send('');
    }
    
    //comando que inserta una foto de pibi.
    if(msg.content === '!pibi'){
        msg.channel.send('https://cdn.discordapp.com/attachments/423743123357958144/608569014926704660/unknown.png');
    }
});

client.login('NjA5Mjg1NzAzNDk0NDAyMDU4.XU0fmQ.OOOVElMx2AfAY0Vcp3HESRZDUhQ');
