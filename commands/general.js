/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md 
 * @author : Suhail Tech Info <https://youtube.com/SuhailTechInfo>
 * @description : Secktor,A Multi-functional whatsapp bot Created By Suhail.
 * @version 0.0.6
 **/

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 8) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://chat.whatsapp.com/Gq8IPcT52JTLBb4QobQTJt')
        let cap = `صلي على رسول الله محمد افضل البشريه`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "لا تتهور",
                    body: "لا تتعب نفسك",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "بوت",
        alias: ["رايزل","اوامر","الاوامر","menu"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('asia/karachi').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
        let ter = 
⌬━─━｢مقدمه｣━─━⌬
 هلا:-｢  ${citel.pushName}  ｣
الوقت:-｢  ${time}  ｣
التاريخ:-｢  ${date}  ｣
المطور:-｢ @رايزل جورج ｣
موقعنا:-｢ https://solo.to/daemon-1 ｣
*⺀اوامر بوت رايزل⺀*
⌬━─━｢المشرفين｣━─━⌬
❀╎.منشن
*┇↜⟬ لعمل منشن جماعي ⟭*
❀╎.مخفي
*┇↜⟬ لعمل منشن مخفي ⟭*
❀╎.طرد
*┇↜⟬ لطرد اي شخص ⟭*
❀╎.انذار
*┇↜⟬ عمل انذار ⟭*
❀╎.حذف_انذار
*┇↜⟬ حذف احد الانذارات ⟭*
❀╎.ترقيه
*┇↜⟬ لترقية عضو ⟭*
❀╎.تخفيض
*┇↜⟬ لسحب اشرافه ⟭*
❀╎.حذف
*┇↜⟬ لحذف رسالة اي شخص ⟭*
❀╎.الروابط
*┇↜⟬ لحماية القروب ⟭*
⌬━─━｢الاعضاء｣━─━⌬
❀╎.ملصق
*┇↜⟬ لصناعة ملصق ⟭*
❀╎.زرف
*┇↜⟬ لسرقة حقوق الملصق ⟭*
❀╎.شخص
*┇↜⟬ مثال .شخص غبي ⟭*
❀╎.عكس
*┇↜⟬ عكس كلمات ⟭*
❀╎.اكس
*┇↜⟬ للعب اكس او ⟭*
❀╎.شبيهي
*┇↜⟬ يجيبلك شبيهك ⟭*
❀╎.س
*┇↜⟬ يعطيك سؤال ⟭*
❀╎.ح
*┇↜⟬ سؤال وجاوب بصراحه ⟭*
❀╎.هل
*┇↜⟬ تسأل البوت ⟭*
❀╎.كت
*┇↜⟬ للفعاليات⟭*
⌬━─━｢شاتي｣━─━⌬
*｢ https://chat.whatsapp.com/Gq8IPcT52JTLBb4QobQTJt ｣*
رقمي
Wa.me/967770500831
رايزل جورج
منورين
⌬━─━｢النهايه｣━─━⌬


`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `اوامر البوت`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
