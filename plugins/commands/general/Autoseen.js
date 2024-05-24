class AutoSeen {
  name: "autoseen",
  credits: "Thiệu Trung Kiên",
  cooldowns: 60;
  description: "Seen tin nhắn của người dùng!",
  aliases: ["as"]
  async events({ api }) {
    this.config && api.markAsReadAll(() => {});
  }
  async execute() {
    this.config = this.config ? false : true;
    return kaguya.reply(`Đã ${this.config ? "bật" : "tắt"} tính năng tự động seen tin nhắn người dùng`);
  }
}

export default new AutoSeen
