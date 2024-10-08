const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347064452917";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_24_09_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJNR3dBam5NMFBYUjNSSzFRNmJQWUxBOUNnZEVVVFNvM1pqeThwV0htakE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2NDQ1MjkxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E1NzRCMkUzMjUzRTE5NDk0QzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2NzU5NDQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1yNFBaTEZ4VFdTdVFuNTV1clVfZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTJkMjA1MWItNDBkYS00MWY0LWE2NGUtM2U0OWEzNWNmNWY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMTg5LFxuICAgICAgMjUzLFxuICAgICAgMjI4LFxuICAgICAgMTg1LFxuICAgICAgMTA2LFxuICAgICAgNjAsXG4gICAgICAyNDgsXG4gICAgICAxOTIsXG4gICAgICAyNDAsXG4gICAgICAzLFxuICAgICAgOTYsXG4gICAgICAxODUsXG4gICAgICA4NSxcbiAgICAgIDMxLFxuICAgICAgOTIsXG4gICAgICAyNTEsXG4gICAgICAyNCxcbiAgICAgIDUzLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAyMTgsXG4gICAgICA4NixcbiAgICAgIDE2OCxcbiAgICAgIDI0OCxcbiAgICAgIDE0NyxcbiAgICAgIDEyNCxcbiAgICAgIDIyNSxcbiAgICAgIDE5LFxuICAgICAgMTQ5LFxuICAgICAgMTgsXG4gICAgICAxNTIsXG4gICAgICAxODAsXG4gICAgICAyMTEsXG4gICAgICAxMTgsXG4gICAgICA1MixcbiAgICAgIDEzMCxcbiAgICAgIDQ5LFxuICAgICAgMTYxLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlNlaXRVQkVJdUVzYmNHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTQVgvYnJqNHlHZElmakU0T1k2VEwrdnlzczFwOU5WVDdrYkUydlYzRW5NPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtzMDYyRUlueUZjSm56WGR3VmVrK3lSWUlpSVBSQXFSYm9CeTk0aGJ3TCtIVkU4N3FYWGxtNHhIN3ZFaGxBN29XU2hCOHdPYmt3WVk1T2hZa01vRWhnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxzTklLUngrTUdncXEyalNvMDJkU0hOcUx5aFBCZGpEK3Q0c3pqVTlrdHRoTlZZMlhmeEpmUEkvbUZqWmdGSnRtbTByOXRwODVzayt1MWt5SHBOQWpRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NDQ1MjkxNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDkwNDcxNjE4NTc3Njo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKggFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NDQ1MjkxNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NzU5NDM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXJhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJclkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWK3h3b3hWY0l0WUJkcm1KdFc4OXJSaDlCN2xPUGJBR29taW9iNGR1WlE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI1NTMzMTcyNzk3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXJhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUppalNNZjJmUlFkYnpoV0lhZUpiSFpZMmxPTlB4T3AwZXYxb3RsOE9ydz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDY4NjEwNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTUzODAzNzQ1MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlyYy5qc29uIjogIntcImtleURhdGFcIjpcIllOZGs3MnQva1MrWEhpM0lpMEI2SmhZVUgvU0xqNjhoV2d3OU1HV0lFTlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ2ODYxMDc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU1NzAyMzA2NTlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOZk10aGZla3ZhT0lxYmdHVnY3WXlwVE44VmpiVjduSFA0Y0tZaVQra2JBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI1NjU0MDQ3NTUyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXJnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXIxM3VNUE81bHpiSlhNc2Ryd0JaY1NtazlZV2NSMzRaL1U2U2xSYjkxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDY4NjEwNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTY2MDgwMTM4NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlyai5qc29uIjogIntcImtleURhdGFcIjpcIjFvanpXSXZDbjNhQTZKa0hpdHhaK1VJVzJqTzFXcDhpRjNta0VYQ0pPUFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ2ODYxMDc2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMSwwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTg5NTU5MjI2MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlyay5qc29uIjogIntcImtleURhdGFcIjpcIjAxYUxtNXVFc0NEUTV4YWJmc3dsOGIySkR6K1RlcE4rM3RQNnhCcWFGZW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ2ODYxMDc2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU4OTU1OTQxNTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrQUk1UHhPR3c1TkFvNE95dVo4eklBWUdBNlFHTEJoaDhCNkZ3dWhFZ0NBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzI1OTQyNzYyNzUwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXJvLmpzb24iOiAie1wia2V5RGF0YVwiOlwieXJxR0FnZjJKbTZHT1g5OFE3Rzc3UW9ESm8vOWJtb3FTWEpsTzBORkRnST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDY4NjEwNzYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTk4NzE1MTAwMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlycS5qc29uIjogIntcImtleURhdGFcIjpcImZKeVBLOVdLM0tQZTRvL3BMOStPQkR1cmxhV0h6MWVXRmMwWXhuV05HSms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ2ODYxMDc2LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIxNzI2NDI0MjUyMTYzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXJyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVG9NZkxOSDZkMVJ6MjMvbFlWbGttRDZqU2NETjVJM2FPY2p5Tmk1TmZWST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDY4NjEwNzYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsMl19LFwidGltZXN0YW1wXCI6XCIxNzI2NDI0MjUzOTQxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXJ0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVy9ML2FOeEVxbWRKVkJ4YTFoVDV0d1VVaHVDQW9POEdwa1Zra2ZDZlNudz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDY4NjEwNzYsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOls1LDIsMywwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY3NTkzODQ3NTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2MncwcFhHVlAvN2lldTY3SGs1UEI4NERwYTVSTUk1bFdvZjFwTFFJcFhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMywyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY3NTkzODY1NzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcncuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGazA2aE9GcFpxd2R4eEZnMlNHTitaYTYrNE9VZ0JWNGRKNEM3blBlTkdzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY3NTkzOTMxNzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCSEtuN28zaUpuUkYwSDJBZ3QwK09scU1yRzdrWGtPRVc2V0xqbjVVRHVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzI2NzU5Mzk1MTkyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBTUFBSXJaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmpYQWh2bGk5NWVIT2VlOHJBaXVoSXFsenpGaUl1S2Rzb2pUSWZEd09YVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDY4NjEwNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTUzMzE4OTMyMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQU1BQUlyYi5qc29uIjogIntcImtleURhdGFcIjpcIldlTlpVSjZpZFpSS1dKdFZ3d3VscmovMHJsUFVpSHZPV2FBQWxkTm8vM2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ2ODYxMDc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMywwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU1NjI2MzU2NDlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFNQUFJcmQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPcklIazNJc1Fvd1o1ZXY1Y0pTMi9VYldNeldJK0pTRmROenlXbUJDa3dnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzI1NjUxOTA2MDk0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBTUFBSXJmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQUZncUp3VUtvdFhZSmkyZHhxNy9KLzFwNTc1THFEcmpmZ3FBVEFNS0dNbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDY4NjEwNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTY1NzE2ODA0M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVFBQUlyaC5qc29uIjogIntcImtleURhdGFcIjpcIlhvT09YZE1OcnZiRzN3c0k1OTVIcjlwSEIxYnVIY1pqNGhnZjZvclFlMVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ2ODYxMDc2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCw0LDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTg5NTMzNTY3N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVFBQUlybC5qc29uIjogIntcImtleURhdGFcIjpcIlVJcXdzeis1Q1k2T0Rwa0tubWZyOWlRUzZ0VjAzL1VVcW5UWHo0WXNtWFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ2ODYxMDc2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbNCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU4OTU2MDAxMzFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFRQUFJcm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvZ0RscHNVTnN4QnZlajZlMzBOTjZMdGJUVFBQSHhTWCtWdFp5Q2FJbTMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0Njg2MTA3NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzQsMF19LFwidGltZXN0YW1wXCI6XCIxNzI1OTc2OTc0Mzc3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
