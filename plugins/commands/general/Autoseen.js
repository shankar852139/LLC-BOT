const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autosen.txt';

module.exports.config = {
    name: "autosen",
    version: "1.0.0",
    credits: "NTKhang (Chuyển đổi bởi NTKhang)", // Ghi nhận người chuyển đổi
    description: "Bật/tắt tự động seen khi có tin nhắn mới",
    commandCategory: "admin", // Chuyển sang mục "admin" của Xaviabot
    usages: "[on | off]", // Cú pháp rõ ràng hơn
    cooldowns: 5,
    dependencies: { // Đảm bảo fs-extra được cài đặt
        "fs-extra": ""
    }
};

module.exports.onLoad = () => {
    // Kiểm tra và tạo file khi module được load
    if (!fs.existsSync(pathFile)) {
        fs.writeFileSync(pathFile, 'true');
    }
};

module.exports.handleEvent = async ({ api, event }) => {
    const isEnable = fs.readFileSync(pathFile, 'utf-8');
    if (isEnable === "true") { // So sánh chặt chẽ hơn
        api.markAsReadAll(); // Không cần callback
    }
};

module.exports.run = async ({ api, event, args }) => {
    const input = args[0]?.toLowerCase(); // Lấy input và chuyển về chữ thường

    if (input === 'on') {
        fs.writeFileSync(pathFile, 'true');
        api.sendMessage('Đã bật chế độ tự động seen.', event.threadID, event.messageID);
    } else if (input === 'off') {
        fs.writeFileSync(pathFile, 'false');
        api.sendMessage('Đã tắt chế độ tự động seen.', event.threadID, event.messageID);
    } else {
        api.sendMessage(`Sai cú pháp. Sử dụng: ${this.config.name} on hoặc ${this.config.name} off`, event.threadID);
    }
};
