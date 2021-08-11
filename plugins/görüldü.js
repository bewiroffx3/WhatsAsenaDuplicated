const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'goruldu', fromMe: true}, (async (message, match) => {

    if (message.reply_message === false) return await message.sendMessage('```Lütfen bir mesaja yanıt verin!```');

    await message.client.sendMessage(message.jid, '' + '@' + message.reply_message.jid.split('@')[0] + ' ```Adlı kişiye görüldüden kurtarma tavşanı gönderiliyor...```', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await message.sendMessage('__/﹋\\__ \n  (҂`_´)\n<,︻╦╤─ ҉ - - *demek görüldü atarsın*\n__/﹋\\__ \n|￣￣￣￣￣|  \n*|görüldüden|* \n*|kurtarma    |*\n*|  tavşanı     |*\n|＿＿＿＿＿| \n(\\__/) || \n(• ㅅ•) || \n*/  づ/GÖRÜLDÜDEN KURTARMA BÜYÜSÜ*\n    ∧＿∧\n（｡･ω･｡)つ━☆・*。\n⊂ ノ    ・゜+.\n   しーＪ   °。+ *´¨)\n   .· ´¸.·*´¨) ¸.·*¨)\n  (¸.·´ (¸.·’*\n*💗💘💓Tarlaya💝💞💘*\n  *💕💟💓Ektim💘💟💓*\n*💕💞💟Tütünü💞💗💖*\n*💓Tavşan yedi kökünü💓*\n*💗💞💘Bir daha💓💕💖*\n*💓💗💘Görüldü💞💟💕*\n*💓💝💞Atarsan💟💕💗*\n   *💕💟💘Bil ki💘💖💓*\n*💕💖💟 S*kecem 💗💝💕*\n     *💞💗💟 O💖💗💝*\n*💕💓💟G*tünü💗💘💖*');

}));
