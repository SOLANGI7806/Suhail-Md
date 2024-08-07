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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_42_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjE2TlJ6ZWEvWUQ5eERSeFVCQlYwQjNRMkNmSXd2T1hRUk1abkJyQUxaNDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlVN3dMRzNVVE55VXB0Z0Fuc1FTOUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmRmNWM4ZGMtMDYwMS00YjIyLThhMDEtMjFiMGFiNWVmODU5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDIyMCxcbiAgICAgIDI1MSxcbiAgICAgIDE1NyxcbiAgICAgIDI1MSxcbiAgICAgIDMsXG4gICAgICAxMjMsXG4gICAgICAyMTYsXG4gICAgICAyMjcsXG4gICAgICAyLFxuICAgICAgMTI3LFxuICAgICAgNDIsXG4gICAgICA4NixcbiAgICAgIDUyLFxuICAgICAgOTUsXG4gICAgICAxMjYsXG4gICAgICAyNDEsXG4gICAgICAzMCxcbiAgICAgIDgwLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDExMCxcbiAgICAgIDE5LFxuICAgICAgMjQ1LFxuICAgICAgMjI4LFxuICAgICAgMTExLFxuICAgICAgMTExLFxuICAgICAgMjUzLFxuICAgICAgMjMxLFxuICAgICAgOTYsXG4gICAgICAyMjcsXG4gICAgICA3OCxcbiAgICAgIDE5NixcbiAgICAgIDI1MCxcbiAgICAgIDcyLFxuICAgICAgMTQsXG4gICAgICAxMzgsXG4gICAgICAzNSxcbiAgICAgIDIwOCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkozSDc5VDc1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMjEzNTU4MTM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBemhhclwiLFxuICAgIFwibGlkXCI6IFwiNzgwMDEwMzUzMzM3MTU6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnk0NHBnRkVJdWN6N1VHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCNHhDQ3NJWXJsYytrRithUUFxdy8wVnJLWStjWGdSSGFiSjVXL3VQckZFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlF5ZGdrZXY4S051Q052bkx3WTRjYzBDK1R2d2Z4bkFBNEloZDBHbjBjOXRycVVCSS9PMTFQODU0MEd4TjZzSGlvY2pvZG1rUHM4K3FQcmFzV3piVUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBnaFhKZ2YwdmpVOWJZZG5NZ0xJUG9FV1dVbXBjU2hJMWtPWmRmemowYzROWS9sUFM3eXpQNGhHZE9xM3pJLythNjNCZGlxNDBGUVRISFozZUkvZGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyMTM1NTgxMzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA1OTcyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9oRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2hFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS29lLzFjV1hXQ055NWVkQkFEU2F6TTlRSTArRTBmaXhuTzFIUnhVUU9BWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzk0MTIxNzU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
