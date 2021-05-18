const Siri = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Siri.addCommand({pattern: 'hg', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*Kimler Gelmiş Kimler*');
  
    await new Promise(r => setTimeout(r, 1000));
   
    await message.sendMessage('*Hoşgeldin*');

}));


