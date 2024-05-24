import cron from 'node-cron'

// learn more about cron time here:
// https://www.npmjs.com/package/node-cron?activeTab=readme
const jobs = [
    {
        time: "0 22 * * *", // every day at 22:00 (10 PM)
        message: () => "𝒄𝒉𝒖𝒄 𝒎𝒐𝒊 𝒏𝒈𝒖𝒐𝒊 𝒏𝒈𝒖 𝒏𝒈𝒐𝒏 ❤️",
    },
    {
        time: "0 3 * * *", // every day at 22:21 (10:21 PM)
        message: () => "3𝒉 𝒔𝒂𝒏𝒈 𝒕𝒊𝒎 𝒅𝒐𝒊 𝒕𝒉𝒖 🐧",
    },
    {

        time: "0 5 * * *", // every day at 22:21 (10:21 PM)

        message: () => "𝒔𝒂𝒏𝒈 𝒓𝒐𝒊 𝒅𝒂𝒚 𝒅𝒆 😪",

    }
]

export default function autoSend() {
    // cron.getTasks().forEach(task => task.stop());

    const timezone = global.config?.timezone || "Asia/Ho_Chi_Minh";
    if (!timezone) return;

    for (const job of jobs) {
        cron.schedule(job.time, () => {
            let i = 0;
            for (const tid of job.targetIDs || Array.from(global.data.threads.keys()) || []) {
                setTimeout(() => {
                    global.api.sendMessage({
                        body: job.message()
                    }, tid);
                }, (i++) * 300)
            }
        }, {
            timezone: timezone
        })
    }
}
