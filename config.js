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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_54_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyeVAwU25hV2k3T2dEMytPaUlETkJDUnRhVHNtck1RMTFKQW0va1A2RFFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZQ3d0bjBZRlRxNkVZbHlaN1dicWFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzYWY4NjI0LTI4NTEtNDE5NC04ODA1LTFkZDA1ZTI0Yzc3N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAyNDUsXG4gICAgICAxOTEsXG4gICAgICAyNDUsXG4gICAgICAxMyxcbiAgICAgIDkxLFxuICAgICAgOTMsXG4gICAgICAyNDgsXG4gICAgICAyNDIsXG4gICAgICAyNTQsXG4gICAgICAxNjUsXG4gICAgICAxMjYsXG4gICAgICAzOSxcbiAgICAgIDI4LFxuICAgICAgMTk2LFxuICAgICAgMjI0LFxuICAgICAgMjI0LFxuICAgICAgNzMsXG4gICAgICAxNTcsXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDIzNSxcbiAgICAgIDE4MCxcbiAgICAgIDE4NyxcbiAgICAgIDE1LFxuICAgICAgMjUwLFxuICAgICAgMjQ1LFxuICAgICAgMTU2LFxuICAgICAgMTY2LFxuICAgICAgMjIzLFxuICAgICAgMTk0LFxuICAgICAgMTkxLFxuICAgICAgMTE0LFxuICAgICAgMjUyLFxuICAgICAgMTM1LFxuICAgICAgMjM5LFxuICAgICAgNDIsXG4gICAgICA5OCxcbiAgICAgIDIyMSxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRSEoxRjFZRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDIxMzU1ODEzOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXpoYXJcIixcbiAgICBcImxpZFwiOiBcIjc4MDAxMDM1MzMzNzE1OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5NDRwZ0ZFTnIreWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjR4Q0NzSVlybGMra0YrYVFBcXcvMFZyS1krY1hnUkhhYko1Vy91UHJGRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZR1pCa1Q1UUM0ajNXb3R0UGNjUjZxWWI4NzNlSXJhN0I2aDJQS2t0SzFrVVh2TExwdnZtdWZZekFXdysvSFJsN2NiYTNOZS9BL0duUHpLRVg3Q0JDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZaUh1b0t6U2JydVBsQ3FIRDFKUE81ajFYR0l1MG4rZUsweDFNNW9qQndGcGIxeFhqSllMdUdCWVRNSURacFNRdnAxa3AySm9MaDQ2eU9mT044T2ZCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjEzNTU4MTM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NzQwNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPaEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9oRS5qc29uIjogIntcImtleURhdGFcIjpcIktvZS8xY1dYV0NOeTVlZEJBRFNhek05UUkwK0UwZml4bk8xSFJ4VVFPQVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5NDEyMTc1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
