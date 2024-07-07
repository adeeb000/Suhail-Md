const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


 SUHAIL_09_05_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAyL


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
