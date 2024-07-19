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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_45_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJucW5uUjg2SHowRmhhTnRMZmlGd3Z6SmdwZWhDMWNycS93b3VVV1BKY0hvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyMTM1NTgxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDM3RjAyRDY0NDlEQTJDRjM5MTEzOTZCNkE4OEE2RjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzg1OTEwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklPWUd3VG1NVFpDb0FfSWVvendaZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjZlOWZiNGQtZWZlOC00NTZhLWE1ZDMtZjgwZmMyMGVlYWZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgNjIsXG4gICAgICAxMzYsXG4gICAgICAxNixcbiAgICAgIDE2MCxcbiAgICAgIDIwNyxcbiAgICAgIDE5MSxcbiAgICAgIDEzMyxcbiAgICAgIDE1NixcbiAgICAgIDEyMixcbiAgICAgIDYwLFxuICAgICAgMjAwLFxuICAgICAgMTg5LFxuICAgICAgOCxcbiAgICAgIDI1MyxcbiAgICAgIDIxMSxcbiAgICAgIDI0NCxcbiAgICAgIDMyLFxuICAgICAgMTcyLFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgNjQsXG4gICAgICAxMTYsXG4gICAgICAxMjUsXG4gICAgICAxOCxcbiAgICAgIDE5NCxcbiAgICAgIDUyLFxuICAgICAgMzcsXG4gICAgICAxODAsXG4gICAgICAxMjMsXG4gICAgICAyMDksXG4gICAgICAxMDYsXG4gICAgICAyMSxcbiAgICAgIDExMSxcbiAgICAgIDIwMSxcbiAgICAgIDIzMixcbiAgICAgIDY1LFxuICAgICAgMTAyLFxuICAgICAgMjQwLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk04SDQ4TktOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMjEzNTU4MTM6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwk4WLQVpIQVLwk4OuIMuQzaLCuyAgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSDwk4ap8JakjfCThqpcIixcbiAgICBcImxpZFwiOiBcIjc4MDAxMDM1MzMzNzE1OjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ptaGpKUUVFSzJINmJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibHpZU0diaUdESExCZml6VnJZQmk1Q29KTWM4MnRpNXdscks1aTNNdjlVbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhRFJWQzl0QTc1WFFVM09YQzNIWSt0VndGVXBlS0RXV2NINElwRGJmUjc5bjJKUU14VnEyeEM0VTVIR1kyMXdHNUozWlkyU1IrVDJNSHVaNXRuMlJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaLytWV21UbkI5Q1A5dWhDbTVQZkE1TTlmYWtKZElqTGxlMTNhUjVZMm9mMWhDYXJXdHRhVW9OOHdqVGphTHBMYit5WE1HZU9aVDZ6SEdOQ1RxWUpEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjEzNTU4MTM6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzg1OTA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1J1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtdjdwNHpSNFQ4NFBQSzB3Y3hYN3NwSnJCZngwVURDVFE5RmU2bnFDL0dNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTU4ODU3MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzODQyMjgwMjhcIn0iCn0="  // PUT your SESSION_ID 


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
