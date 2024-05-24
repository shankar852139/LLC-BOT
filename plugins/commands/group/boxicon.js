const config = {
	name: "boxicon",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "",
	description: "Đổi Emoji nhóm của bạn",
	commandCategory: "Box", 
	usages: "boxemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

async function onCall({ message, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("Bạn chưa nhập Emoji 💩💩", message.threadID, message.messageID)
	else api.changeThreadEmoji(emoji, message.threadID, () => api.sendMessage(`🔨 Bot đã đổi thành công Emoji thành: ${emoji}`, message.threadID, message.messageID));
}
export default {
    config,
    onCall
};