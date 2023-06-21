
const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const canvacord = require("canvacord");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
            pattern: "ادخل",
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`֎╎ويـن  الـرابـط ؟ ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply(" خطأ ");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("تم"))
                .catch((err) => citel.reply(" مقدرت ادخل"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ملصق",
            alias: ["ستكر","ستيكر","sticker"],
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`֎╎رد  عـلـى صـورة`);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (citel.quoted) {
                let media = await citel.quoted.download();
                let sticker = new Sticker(media, {
                    pack: citel.pushName, // The pack name
                    author: "𝚁𝙰𝙸𝚉𝙴𝙻 ᪘", // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            } else if (/video/.test(mime)) {
                if ((quoted.msg || citel.quoted)
                    .seconds > 20) return citel.reply("الحد الاقصى للفيد 20 ثانية");
                let media = await quoted.download();
                let sticker = new Sticker(media, {
                    pack: citel.pushName, // The pack name
                    author: "", // The author name
                    type: StickerTypes.FULL, // The sticker type
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 70, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("رد على صوره");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "مساعدة",
        alias: ["الدعم","الشات","رايزل"],
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`ارسلتلك للخاص يعمري ${tlang().greet}`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `֎╎الـرابـط : https://chat.whatsapp.com/Gq8IPcT52JTLBb4QobQTJt`,
        });

    }
)

//---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------


//---------------------------------------------------------------------------

cmd({
    pattern: "منشن",
    alias: ["تاج","تاك","ازعاح"],
    filename: __filename,
  },
  async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = await getAdmin(Void, citel)
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) return citel.reply(tlang().admin);
  
    const admins = []
    const members = []
    for (let mem of participants) {
      if (groupAdmins.includes(mem.id)) {
        admins.push(mem.id)
      } else {
        members.push(mem.id)
      }
    }
  
    let textt = `${text ? text : "السلام عليكم"}\n\n`

    
    const creator = groupMetadata?.owner || "";
  
    if (creator) {
textt += `\n 👑 @${creator.split("@")[0]} 👑\n\n`;
    }
  
  
    if (admins.length > 0) {
textt += "المشرفين 🥇:\n\n"
      let count = 1;
      for (let admin of admins) {
        textt += `ـ ${count} ❐ @${admin.split("@")[0]}\n`;
        count++;
      }
    }
  
    if (members.length > 0) {
textt += "\nالأعضاء 🥈:\n\n"
      let count = 1;
      for (let member of members) {
        textt += `ـ ${count} ❐ @${member.split("@")[0]}\n`;
        count++;
      }
    }
  
    
    Void.sendMessage(citel.chat, {
      text: textt,
      mentions: participants.map((a) => a.id),
    }, {
      quoted: citel,
    });
  })
  
  


    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    cmd({
    pattern: "طرد",
    filename: __filename,
},
async(Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

    if (!isAdmins) return citel.reply(tlang().admin);
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("منشنه او رد على رسالته");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
        citel.reply("  ֎╎طردته الكلب ");
    } catch {
         citel.reply(tlang().botAdmin);
    }
});

    //---------------------------------------------------------------------------
        cmd({
    pattern: "ترقية",
    filename: __filename,
},
async(Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

    if (!isAdmins) return citel.reply(tlang().admin);
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("منشنه او رد على رسالته");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
        citel.reply("  رقيته.");
    } catch {
         citel.reply(tlang().botAdmin);
    }
});
    //---------------------------------------------------------------------------
        cmd({
    pattern: "تخفيض",
    filename: __filename,
},
async(Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

    if (!isAdmins) return citel.reply(tlang().admin);
    if (!isBotAdmins) return citel.reply(tlang().botAdmin);
    
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    if (!users) return citel.reply("منشنه او رد على رسالته");
    
    try {
        await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        citel.reply(" رجع عضو.   ");
    } catch {
         citel.reply(tlang().botAdmin);
    }
});
    //---------------------------------------------------------------------------
cmd({
            pattern: "مخفي",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply(tlang().admin);

            if (!isAdmins) citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, {
                text: text ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: citel,
            });
        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "قروبات",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `جميع قروبات البوت\n\n`
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*الاسم:* ${metadata.subject}\n`
                jackhuh += `*الاعضاء :* ${metadata.participants.length}\n`
                jackhuh += `*الايدي:* ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )
    //---------------------------------------------------------------------------

//---------------------------------------------------------------------------
cmd({
            pattern: "احذف",
            alias: ["حذف"],
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('هذا الأمر خاص بالمشرفين')
                if (!isBotAdmins) return citel.reply('ارفعني مشرف ')
                if (!citel.quoted) return citel.reply(` ماذا احذف   ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
//---------------------------------------------------------------------------

