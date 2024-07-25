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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_05_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZqcTB4SkZMTU0rK3FTbUVnb0NZVVhQZEVOc0NJdThpOWlzejBOUXQvR3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDIxMzU1ODEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5M0Y2ODBEQkY4QkVFN0JFOUMzQTlFQzhBQjBFNUZFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4OTQ2OThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSGhRUTViYmNTXy1pVkxYbkh1V05nZ1wiLFxuICBcInBob25lSWRcIjogXCIwMDJhZWQ0NS05ODZiLTRjZmMtYjgwYy03Mjg3MjhhN2ViOGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMzEsXG4gICAgICA0MyxcbiAgICAgIDQsXG4gICAgICAxMjQsXG4gICAgICAyMDQsXG4gICAgICAxNTcsXG4gICAgICAxNjcsXG4gICAgICAxNDcsXG4gICAgICAxNixcbiAgICAgIDcyLFxuICAgICAgNTQsXG4gICAgICA0MixcbiAgICAgIDIxNCxcbiAgICAgIDM5LFxuICAgICAgMjE0LFxuICAgICAgNzAsXG4gICAgICAyMTMsXG4gICAgICAyMjgsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMTQsXG4gICAgICA2OSxcbiAgICAgIDYxLFxuICAgICAgNDIsXG4gICAgICAxNTIsXG4gICAgICA4NixcbiAgICAgIDE3MSxcbiAgICAgIDIwMSxcbiAgICAgIDIzMyxcbiAgICAgIDEzMyxcbiAgICAgIDI0NSxcbiAgICAgIDIxMSxcbiAgICAgIDQ5LFxuICAgICAgNzksXG4gICAgICAzMixcbiAgICAgIDE5LFxuICAgICAgOTMsXG4gICAgICAyNDYsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFo3ODFYRTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyMTM1NTgxMzo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThYtBWkhBUvCTg64gy5DNosK7ICAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5ICDiirkgIOKKuSAg4oq5IPCThqnwlqSN8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNzgwMDEwMzUzMzM3MTU6ODdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVONHI0SEVLQ09pTFVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxTjR3SVoydG1pQmV0UGdTTjB5TGpHS3F3cjFTb2dIaHJEVEJrdUMxTWtNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllJOXZrNVdzY2cwRVhwZXJnSEVhSFJyV1ZwTXhWTGlXeEpiWEFwdnREVm13Z25NTU1RcDhvbE4xTU8xWGltRVQ4aUQ5dksxcytkRzR1elJLK3VISENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRVa2F4RWY4VEVMaStKaDNKV3RUMEc3akRXSGJoVzA5Ym1Wbm0yT2lXR1BpUWtxcGphbGdJSXBLS1ZpajFra1B1anZHcklOYlZmWFJ5d0JseW16dmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyMTM1NTgxMzo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4OTQ2OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1wQy5qc29uIjogIntcImtleURhdGFcIjpcIitncGFtalhvTWwvNXN0bjdKMUtjVS9KNEs3WnBNVk4vSXMvMHFCREgraEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxMDY3OTAwMixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
