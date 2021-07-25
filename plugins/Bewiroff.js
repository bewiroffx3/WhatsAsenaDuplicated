const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');


    Asena.addCommand({pattern: 'bewiroff', fromMe: false, desc: Lang.WP}, (async (message, match) => {

        var r_text = new Array ();
r_text[0] = "https://www.linkpicture.com/q/28.03.18-39-20210726_001723.jpg";
r_text[1] = "https://www.linkpicture.com/q/28.03.18-39-20210726_001723.jpg";
var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
     
    await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made For Bewiroff'}) 

}));
