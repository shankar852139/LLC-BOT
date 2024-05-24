import axios from 'axios';
import os from 'os';
const config = {
  name: "upt",
  aliases: ["tt"],
  description: "",
  usage: "",
  cooldown: 5,
  permissions: [2],
  credits: "XaviaTeam",
  isAbsolute: true
};

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  const userInfo = os.userInfo();
  const platform = os.platform();
  const arch = os.arch();
  const cpu_model = os.cpus()[0].model;
  const core = os.cpus().length;
  const speed = os.cpus()[0].speed;
  const byte_fm = os.freemem();
  const byte_tm = os.totalmem();
  const gb_fm = (byte_fm / (1024 * 1024 * 1024)).toFixed(2);
  const gb_tm = (byte_tm / (1024 * 1024 * 1024)).toFixed(2);
  const u_mem = ((byte_tm - byte_fm) / (1024 * 1024 * 1024)).toFixed(2);
  const nodeVersion = process.version;
  try {
    const lth = (await axios.get(`https://pic.re/image`, {
       responseType: "stream"
         })).data;
    const replyMessage = await message.reply({body:`
Thời gian đã hoạt động: ${hours} giờ ${minutes} phút ${seconds} giây\nHệ điều hành: ${platform}\nKiểu Arch: ${arch}\nNode: ${nodeVersion}\nCPU: ${core} core(s) - ${cpu_model} - ${speed}MHz\nDung lượng trống: ${gb_fm}GB (Đã dùng ${u_mem}GB trên tổng ${gb_tm}GB)`});
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  onCall,
};