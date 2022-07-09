let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5000'
let sn = '10.000'
let ss = '15.000'
let sp = '20.000'
let sv = '25.000'
//premium
let ph = '10.000'
let pn = '15.000'
let pp = '20.000'
let pv = '25.000'
let ppm = '30.000'
let info = `
*${htki} sᴇᴡᴀ ${htka}*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ 5000Rp/grup (1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ 10.000Rp/grup (1 bulan)

┏⫹⫺ *sᴛᴀɴᴅᴀʀ* 
┗$ 15.000Rp/grup (2 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ 20.000Rp/grup (3 bulan)

──···────────────────···──

*${htki} ᴘʀᴇᴍɪᴜᴍ ${htka}*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ 10.000Rp (1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ 15.000Rp (1 bulan)

┏⫹⫺ *ɢᴏᴏᴅ* 
┗$ 20.000Rp (3 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ 50.000Rp (5 bulan)                                            


*✃ ᴘᴀʏᴍᴇɴᴛ*
• *Pulsa Mtri:* [6289524108342]
• *eWallet:* [601169466091]

–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja.. max tawar Rm5

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `✃ sᴇᴡᴀ`,
	rows: [
	    {title: "𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'Rupiah (1 minggu)' },
	    {title: "𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'Rupiah (1 bulan)' },
	{title: "𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'Rupiah (2 bulan)' },
	{title: "𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'Rupiah (3 bulan)' },
	//{title: "🔖 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'Rupiah (12 bulan)' },
	]
    }, {
    title: `✃ ᴘʀᴇᴍɪᴜᴍ`,
	rows: [
	    {title: "𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'Rupiah (1 minggu)' },
	    {title: "𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'Rupiah (1 bulan)' },
	{title: "𝗚𝗢𝗢𝗗", rowId: '.order *Paket:* GOOD • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'Rupiah (3 bulan)' },
	{title: "𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'Rupiah (5 bulan)' },
	//{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'Ringgit (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "ʙ ᴜ ʏ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler