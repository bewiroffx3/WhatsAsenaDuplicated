/*Codded by @Ali Bey 
Telegram: wa.me/+972534997864
Instagram: ll_25_noyabr_ll 
Thanks:bewiroff 
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config'); // +
let wk = Config.WORKTYPE == 'private' ? true : false // +
const pd = "Arkadaşlarınıza güzel bio'lar seçer." // +

Asena.addCommand({pattern: 'igbio', fromMe: wk, desc: pd}, (async (message, match) => {

    const id = message.jid // +
    if (!message.reply_message) return await message.client.sendMessage(id, '```Bio seçmem için birini yanıtlaman gerekiyor!```', MessageType.text); // +
    await message.client.sendMessage(id, '@' + message.reply_message.jid.split('@')[0] + ' ```Adlı Kullanıcı için bio seçiyorum..``` ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]} 
    });
    await new Promise(r => setTimeout(r, 1700)); // +
    var r_text = new Array ();
r_text[0] = " *Söylesene bana dünya da acılarım kadar büyük mü...* ";
r_text[1] = " *Mezarlık dediğin nedir ki sen sevdiklerini gömdün mü içine 🥀✨* ";
r_text[2] = " *Siz sadece yanan sigarayı Gördünüz oysa ki O sigarayla ne hayaller yandı😏* ";
r_text[3] = " *Çalınan sözler olsun hayallere dokunmayın* ";
r_text[4] = " *İntikam duygusu yok bende yanlış yapanı ölmüş sayacak kadar asil ve dik başlıyım. Ölüler özür dileyemez! 💎* ";
r_text[5] = " *Bazı pişmanlıklar tekrar edilecek kadar güzeldir..* ";
r_text[6] = " *Ḳaderin izin vermediğine şansın gücü yetmez.* ";
r_text[7] = " *Seni Hatırlatmasın Diye Dinlemediğim şarkılar var* ";
r_text[8] = " *Acıları Sollayalım Derken Mutluluğu Geçmişiz🥂🥀* ";
r_text[9] = " *ÖZLEDİM YAZACAKTIM AKLIMA BENİ SEVMEDİĞİN GELDİ VAZGEÇTİM 🚬🚬🚬* ";
r_text[10] = " *İkinci şansa inanmam ben,ölüyle işim gömene kadardır gerisini Allah affetsin 🖤🖇* ";
r_text[11] = " *Sen üstüne titreyeni değil , altında terleyeni seçtin o yüzden, Yolunda açtığın yara kadar açık olsun 🌼👍* ";
r_text[12] = " *Geçmiş toz gibidir, üfle gitsin* ";
r_text[13] = " *Ben o sokaktan yıllar sonrada gecerdim ama balkonda çocuğun oyun oynar kaldıramam......🍷* ";
r_text[14] = " *𝑺𝒊𝒛, 𝑺𝒊𝒛𝒊 𝑺𝒆𝒗𝒆𝒏 𝑰̇𝒏𝒔𝒂𝒏𝒍𝒂𝒓𝜾 𝑲𝒂𝒚𝒃𝒆𝒕𝒎𝒆𝒚𝒊 𝑪̧𝒐𝒌 𝑺𝒆𝒗𝒊𝒚𝒐𝒓𝒔𝒖𝒏𝒖𝒛...🍁* ";
r_text[15] = " *Küçükken kolumuzu ısırarak saatler yapardık sanki zamanın canımızı acıtacağını biliyormuş gibi ⏱️* ";
r_text[16] = " *Kaybetmekten korktuğum her şeyi, Özgür bıraktım..* ";
r_text[17] = " *Bana bu kadar soğuk davranma hayat üşüyünce sarılacak bi babam yok benim.🥀🕊️* ";
r_text[18] = " *𝐁𝐢𝐳 𝐇𝐚𝐲𝐚𝐭ı𝐦ı𝐳ı 𝐇𝐚𝐫𝐜𝐚𝐝ı𝐤 Ş𝐞𝐫𝐞𝐟𝐢𝐦𝐢𝐳𝐢 𝐇𝐚𝐫𝐜𝐚𝐲ı𝐩 𝐇𝐚𝐲𝐚𝐭ı 𝐲𝐚ş𝐚𝐦𝐚𝐝ı𝐤🦅* ";
r_text[19] = " *Umarım tercih ettikleriniz vaz geçtiklerine değmiştir🥀🥀🥀* ";
r_text[20] = " *Herkes bensiz daha mutlu..* ";
r_text[21] = " *Yanındakine Verdiğin Çiçeği Benim Bahçemden Çaldın 🚬 🚬 🚬* ";
r_text[22] = " *İnsanlara fazla güvenmeyin beyaz gülün gölgesi siyahtır 🥀* ";
r_text[23] = " *Tek başına hayatı öğrenen insanı kimse yokluğuyla korkutamaz* ";
r_text[24] = " *Su Sızmıyan Aramız Şimdi Deniz Manzaralı 🕊️🍂* ";
r_text[25] = " *Unutmak zor anlatmak imkansiz...* ";
r_text[26] = " *Yaşadığınız hayatın hakkını verin özgürlük bedel ister 🕊️* ";
r_text[27] = " *Biz Hep Yaralı Kuşları Sevdik, Sevdikçe İyileştiler, İyileştikçe Uçup Gittiler🩸* ";
r_text[28] = " *Sevildiğini gördün unutuluşunu iyi izle 😣* ";
r_text[29] = " *İhanet talafesi kapeligin bahanesi olamaz* ";
r_text[30] = " *Şu andan itibaren alttan alma devri bitmiştir İncittiğiniz yerden incinirsiniz haberiniz olsun😏🖤* ";
r_text[31] = " *Adımı biliyorsunuz hikayemi değil 🥀* ";
r_text[32] = " *Hikayemiz kaderimizde gizli ✨🤞* ";
r_text[33] = " *Sesimi duyuramadığım bu şehire göz yaşlarımla yağmur yağdırdım🔥⚡* ";
r_text[34] = " *İmkansız olan herşey kafamın güzelliğine bakar..* ";
r_text[35] = " *Kimse kendi kitabına bakmadan başkasının özetini çıkarmaya kalkmasın.* ";
r_text[36] = " *Çok sağlam tövbeler edeceğiz, Yepyeni günahlar için''..⚜️* ";
r_text[37] = " *İnsanlardan sıkılmaya başladıysan gerçeklerin farkına varmaya başlamışsındır* ";
r_text[38] = " *Üzülmek mi ne haddime güldükçe içiyorum 🥀* ";
r_text[39] = " *Ne kadar unuttum desem de onu görünce ben gene en başa saracam.🥀* ";
r_text[40] = " *Belki Hiç Birşey Yolunda Gitmedi Ama Hiçbir Şeyde Beni Yolumdan Etmedi 😏😏* ";
r_text[41] = " *Son sigaram gibiydin içmeye kıyamazdım o cebimde kırıldı sen kalbimde 🔥* ";
r_text[42] = " *DÜNYADA ADALET OLSAYDI YUMURTANIN PARASINI TAVUK ALIRDI...* ";
r_text[43] = " *Dıştan Nasıl Göründüğüme Bakma İçimde Kıyamet Kopuyor...!* ";
r_text[44] = " *Söylesene bana dünya da acılarım kadar büyük mü...* ";
r_text[45] = " *Kelebeğin bir günlük ömrü var diye küçümsemeyin sen yıllardır yaşıyosun uçabildinmi?* ";
r_text[46] = " *Gözünün gördüğü hiç bir şeyden korkma 🕊* ";
r_text[47] = " *İtibar karekter gerektirir boş çuval dik durmaz...👑* ";
r_text[48] = " *Kusura bakma hayat annemin gülüşü kadar güzel değilsin 🙂* ";
r_text[49] = " *Herkesin gitigi bir yol vardır dostum sen kendi bildiğin yoldan git herkesin gitigi yol kendine doğrudur 😉* ";
r_text[50] = " *En büyük mezar insanın kalbine gömülmektir..* ";
r_text[51] = " *Hiç bir ressam çizemez sahte dostların gülüşündeki kahpeliği* ";
r_text[52] = " *𝑀𝑒𝑧𝑎𝑟𝚤𝑚𝚤𝑧 𝑦𝑎𝑛 𝑦𝑎𝑛𝑎 𝑜𝑙𝑠𝑎 𝑠𝑒𝑛 𝑜𝑟𝑑𝑎 𝑑𝑎 𝑏𝑎𝑛𝑎 𝑠𝚤𝑟𝑡𝚤𝑛𝚤 𝑑𝑜̈𝑛𝑒𝑟𝑠𝑖𝑛..🥀* ";
r_text[53] = " *Tek pişmanlığım: yanlış kişilere için yaptığım doğrular.🕊🚬* ";
r_text[54] = " *Hayat gökkuşağı çizmek gibiydi bize kara kalem denk geldi 🖤* ";
r_text[55] = " *İÇİMİZ PAPATYA KOKMASI GEREKEN YAŞTA SİGARA KOKTU* ";
r_text[56] = " *Soğuk kalplerin umudu...🖇🤍* ";
r_text[57] = " *Ben buyuk adam olmadim ama kimseninde adami Olmadim⚖️* ";
r_text[58] = " *Tahliye ettim seni Allah'ına kadar özgürsün 🕊️* ";
r_text[59] = " *Kimseye fazla güvenme beyaz gülün gölgesi siyahtır 🖤*";
r_text[60] = " *𝐁𝐢𝐫𝐢 𝐁𝐞𝐧𝐢 𝐅𝐞𝐜𝐢 𝐘𝐚𝐫𝐚𝐥𝐚𝐝ı, 𝐀𝐦𝐚 𝐁ıç𝐚ğı 𝐁𝐞𝐧 𝐎𝐧𝐚 𝐕𝐞𝐫𝐝𝐢𝐦. . . 💔* ";
r_text[61] = " *Bugün oturdum ölümü düşündüm, on yedi yaşında ve hayat bu kadar güzelken .* ";
r_text[62] = " *Gülmemiz Gereken Yaşta Ölmeyi Düşündük Hayat Bize Hiç Adil Davranmadı...* ";
r_text[63] = " *Herkesin gitigi bir yol vardır dostum sen kendi bildiğin yoldan git herkesin gitigi yol kendine doğrudur 😉* ";
r_text[64] = " *İnsanlar çok sevilmeye alışkın değildir.* ";
r_text[65] = " *Kafamız hiçbir zaman bizden şikayetçi olmadı çünkü biz onu hep güzel yaşattık 👑👑* ";
r_text[66] = " *Ne getireceği belli olmayan güzel yarınlara..! 🌸* ";
r_text[67] = " *Gün Gelir Herşeyin Hesabı Sorulur Şimdilik Mutluluklar...🕊️* ";
r_text[68] = " *Bu hayatın ormanında çok dikenli yollar gördük 🍁* ";
r_text[69] = " *Sigara yakar gibi canımızı yaktılar* ";
r_text[70] = " *Mutluluk bir corbaydı bize çatal verdiler..🥺😏* ";
r_text[71] = " *LEYLA,SI YANINDA OLAN MECNUN HİÇ GÖRMEDİM* ";
r_text[72] = " *✨BEN İMKANSIZA ZAR ATTIM İHTİMALLERLE İŞİM OLMAZ.✨* ";
r_text[73] = " *Kendi ışığına güvenen başkasınının parıldamasından rahatsız olmaz..* ";
r_text[74] = " *Yalnıs Yapacaksan Doğur Kişiye Yapmalısın.* ";
r_text[75] = " *Kaybolan yıllari bosverin biri bana insanlara olan güvenini geri versin..!* ";
r_text[76] = " *GEREĞİNDEN FAZLA İYİ NİYET KENDİNE İHANETTİR.* ";
r_text[77] = " *Güzel günlerin hatrı kalmadı hatır isteyen hata yapmasın* ";
r_text[78] = " *Kafamız hiçbir zaman bizden şikayetçi olmadı çünkü biz onu hep güzel yaşattık 👑👑* ";
r_text[70] = " *Düşünceleriniz Sizde Kalsın Ben Herşeyi Yaşayarak GördüM.🤞* ";
r_text[80] = " *İnsanlar çok sevilmeye alışkın değildir.* ";
var i = Math.floor(81*Math.random()) 


await message.client.sendMessage(id,`${r_text[i]}`,MessageType.text, { quoted: message.data }); // +

}));

Asena.addCommand({pattern: 'infobio', fromMe: false}, (async (message, match) => { 

    await message.sendMessage('*Codded by @Ali Bey*\n💻Kullanım: *.igbio <reply>*\nℹ️Açıklama: Arkadaşlarınıza güzel bio'lar seçer.'); 

}));



