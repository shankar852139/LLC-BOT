const config = {
  name: "fbdown",
  description: "download media from Facebook",
  aliases: ["fbd", "tphat", "fbdl", "fbdowm"],
  usage: "<fbdown> <url>",
  versions: "2.0.1",
  cooldown: 10,
  credits: "github.com/huynhletanphat"
}
/*
thanks api from https://www.facebook.com/profile.php?id=100008578069233
code by https://www.facebook.com/BbiPhatt/
*/
const langData = {
  "vi_VN": {
    error: "Đã có lỗi xảy ra!",
    missingInput: "Vui lòng nhập url (link) video"
  },
  "en_US": {
    error: "An error has occurred!",
    missingInput: "Please enter the video URL"
  },
  "ar_SY": {
    error: "حدث خطأ!",
    missingInput: "يرجى إدخال رابط الفيديو"
  }
};


async function onCall({ message, args, getLang }) {
  try {
    await message.react("⏳"); 
    const input = args.join(" ");
    if (!input) return message.reply(getLang("missingInput"));

    const res = await global.GET(`https://apichatbot.sumiproject.io.vn/facebook/video?url=${encodeURIComponent(input)}`, {
      timeout: 120000
    });
    const data = res.data;

    if (!data.sd) return message.reply(getLang("error"));

    const VideoStream = await global.getStream(data.sd);
    await message.reply({
      body: "Video của mày đây",
      attachment: [VideoStream]
    });
    await message.react("✅");
  } catch (e) {
    await message.react("❌");
    console.error(e);
    message.reply(getLang("error"));
  }
}

export default {
  config,
  langData,
  onCall
};
