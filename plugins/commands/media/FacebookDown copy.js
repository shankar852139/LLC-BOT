const config = {
  name: "arceus",
  description: "Bypass key arceus 1s",
  aliases: ["arceuskey"],
  usage: "<arceus> <hwid>",
  versions: "2.0.1",
  cooldown: 10,
  credits: "MHung and StickX"
}
/*
thanks api from https://www.facebook.com/profile.php?id=100008578069233
code by https://www.facebook.com/BbiPhatt/
*/
const langData = {
  "vi_VN": {
    error: "Đã có lỗi xảy ra!",
    missingInput: "Vui lòng nhập hwid",
    results:"Status : {status}"
  }
};


async function onCall({ message, args, getLang }) {
  try {
    await message.react("🕐"); 
    const input = args.join(" ");
    if (!input) return message.reply(getLang("missingInput"));

    const res = await global.GET(`https://stickx.top/api-arceusx/?hwid=${input}&api_key=E99l9NOctud3vmu6bPne`, {
      timeout: 120000
    });
    const data = res.data;

   await message.reply(getLang("results", {
            status: data.key
   }));
    await message.react("✅");
  } catch (e) {
    await message.react("❌");
    console.error(e);
    message.reply(getLang("Lỗi"));
  }
}

export default {
  config,
  langData,
  onCall
};