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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_45_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICA5MixcbiAgICAgICAgMjksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjB2d2RDR1dtd3A1RW9QUkpiRnZCazEyMldDL2l1ay9zeUhMamNwd0pBUDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzEwMjc4OTQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MkZBNzgxQzcyRjJCRkU5QzAwNTJFRjM1MzA5RUYwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MTc5MzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTAyNzg5NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI0MzUwODE1NjQ3OTAyRjUxQUQwOENEMjZFNDVEOUJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgxNzk0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFV2hxSHhGRVRfeWxuWFRjOGVjMFJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg5YzY2N2RjLWNmZjMtNDM2Ny1iYjAyLTg2ZDJiZjA4MjE2M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxMzMsXG4gICAgICAyMDYsXG4gICAgICAxNjIsXG4gICAgICAxMzMsXG4gICAgICA0NCxcbiAgICAgIDEwNixcbiAgICAgIDk3LFxuICAgICAgMTcwLFxuICAgICAgMjA3LFxuICAgICAgMzEsXG4gICAgICAyNDEsXG4gICAgICA5OCxcbiAgICAgIDE1MSxcbiAgICAgIDE2NyxcbiAgICAgIDE2NSxcbiAgICAgIDc4LFxuICAgICAgMTYyLFxuICAgICAgMTE3LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjMsXG4gICAgICAxNTAsXG4gICAgICAyMDEsXG4gICAgICAxMTgsXG4gICAgICAyMjksXG4gICAgICAyMDksXG4gICAgICAxMTUsXG4gICAgICAxOTIsXG4gICAgICAxNzUsXG4gICAgICAyMzMsXG4gICAgICAyNDEsXG4gICAgICAxMyxcbiAgICAgIDE4NyxcbiAgICAgIDE2NixcbiAgICAgIDIsXG4gICAgICAyNCxcbiAgICAgIDEyLFxuICAgICAgMjA4LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVhKR1FQUjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxMDI3ODk0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FpbVwiLFxuICAgIFwibGlkXCI6IFwiNDkwMTQ3NTM5ODg2OTc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM0MzNlFFRU02Mmc3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImwwN3VHV0Urdjl5QmJVbUQ1di9CUDRJejlsYVR0TWFzTk1RUXBOUjVNeG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUxMUTlWVFZNcWY0YVJ4TTZ3T0ZqclUwdnhieW1wcElVbVB2NWwxdFhaVmF1VXpRN0RyWDI5TjRZbEh5OER2dzNMSXdJUXZsV295ZVM5U2dkcVVuQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicWpUclJKWlNJTXFnRlRtSWgxSFJSK0JFcDRkSjVuYnZnR0hGYlFWdG5ad0FVSC8wYXlCODh2OWdnY1NkQ2xvSW5SU3B5YUtNZ21lc0MzbXlCaThJZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzEwMjc4OTQyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MTc5MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBbXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFtcy5qc29uIjogIntcImtleURhdGFcIjpcIm9HQWg4WlUyVVRkNVRLWGI0UlJnMXRrN0IzRWtpYTVKVFJWR3B5UVZlams9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1MDgwNDI1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODE3OTM5NDg1XCJ9Igp9"  // PUT your SESSION_ID 


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
