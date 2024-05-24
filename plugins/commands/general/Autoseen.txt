module.exports.config = {
    name: "repeat",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Your Name",
    description: "Lặp lại tin nhắn của người dùng",
    commandCategory: "general",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    const { messageReply, body } = event;

    if (messageReply) { // Nếu là tin nhắn trả lời
        api.sendMessage(messageReply.body, event.threadID, event.messageID);
    } else if (body) { // Nếu là tin nhắn mới
        api.sendMessage(body, event.threadID, event.messageID);
    }
};
