const config = {
  name: "fbdown",
  description: "tải media từ Facebook",
  aliases: ["fbd", "tphat", "fbdl", "fbdowm"],
  usage: "<fbdown> <url>",
  versions: "2.0.1",
  cooldown: 10,
  credits: "github.com/huynhletanphat"
};
/*
cảm ơn API từ https://www.facebook.com/profile.php?id=100008578069233
mã nguồn bởi https://www.facebook.com/BbiPhatt/
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

    const res = await global.GET(`https://apidown.site/api/facebook/v2?link=${encodeURIComponent(input)}`, {
      timeout: 120000
    });
    const data = res.data;

    if (!data.attachments || !data.attachments[0] || data.attachments[0].type !== "video") {
      return message.reply(getLang("error"));
    }

    const videoUrl = data.attachments[0].url;
    const videoTitle = data.message || "Không có tiêu đề";
    const likeCount = data.statistics.like || 0;
    const commentCount = data.statistics.comment || 0;
    const shareCount = data.statistics.share || 0;
    const authorName = data.author.name || "Không rõ";
    const authorId = data.author.id || "";

    const VideoStream = await global.getStream(videoUrl);

    const replyBody = `
=== THÀNH CÔNG ===
- 🏷️ Tiêu đề: ${videoTitle}
- ✍️ Tác giả: ${authorName} (ID: ${authorId})
- 👍 Số lượt thích: ${likeCount}
- 💬 Số bình luận: ${commentCount}
- 🔄 Số lượt chia sẻ: ${shareCount}
`.trim();

    await message.reply({
      body: replyBody,
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
