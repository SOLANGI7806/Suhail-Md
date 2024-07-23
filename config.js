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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_18_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQTU1TnVyYlR2Mk9FVVF6ekJOSEtWK00ydWVnWGUydGVWNDdianpPMmhEbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2sxM3RxWDdUQWl5UlZHdlowS20wZ1wiLFxuICBcInBob25lSWRcIjogXCI0NmM0ZjI1MS1hN2IzLTRiMWUtODhhOS0xODRjNzFlOTI5ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA2OSxcbiAgICAgIDQzLFxuICAgICAgMTMyLFxuICAgICAgMTgyLFxuICAgICAgMTc1LFxuICAgICAgMTU0LFxuICAgICAgOTYsXG4gICAgICAxMTQsXG4gICAgICAxOTMsXG4gICAgICA3MixcbiAgICAgIDE1MixcbiAgICAgIDEwMyxcbiAgICAgIDIxNSxcbiAgICAgIDIwNCxcbiAgICAgIDEwNCxcbiAgICAgIDcwLFxuICAgICAgMjIxLFxuICAgICAgMTc1LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMTQxLFxuICAgICAgMjEzLFxuICAgICAgMTY3LFxuICAgICAgNjEsXG4gICAgICAxNzIsXG4gICAgICAyNDcsXG4gICAgICAyNDgsXG4gICAgICA4LFxuICAgICAgNjQsXG4gICAgICAxNixcbiAgICAgIDIyMixcbiAgICAgIDE5OCxcbiAgICAgIDQzLFxuICAgICAgMjQsXG4gICAgICAyMzEsXG4gICAgICAzLFxuICAgICAgMjIzLFxuICAgICAgNTIsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0hGU0o5TkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyMTM1NTgxMzo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThYtBWkhBUvCTg64gy5DNosK7ICAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5IPCThqnwlqSN8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNzgwMDEwMzUzMzM3MTU6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnFONHI0SEVJV2dnTFVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxTjR3SVoydG1pQmV0UGdTTjB5TGpHS3F3cjFTb2dIaHJEVEJrdUMxTWtNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5DK2JyZU4xTDBCQllDMGg4QVZ4OG5qZVFDMndmMG85MzNqWFZEMFd2NDM0SDFoTU5LSkJqWDQxMjNBVDU4N2l2M2ZpK29UWHo2TEVsVHF0NFFMQ0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9jMVpWYVFBNmdQOGVpL204d0wzZGU2aTBoTU9ZVVVNNnNkMG8zaUxLUStBSnJhQjZVYWdJV2Y1clhSbXNWZFVHYmo5alppU0JpdG9sUSszanBNa0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyMTM1NTgxMzo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NjU4OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcEJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1wQi5qc29uIjogIntcImtleURhdGFcIjpcImZXc0YrSEVjZDVhVXBVeUVYMnpsN1BnTm5kTXJCbUFEQXdneDZiVW5FNFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxMDY3OTAwMixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzY0MjA4MDY3XCJ9Igp9"  // PUT your SESSION_ID 


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
