const config = {
    name: "test",
    aliases: ["sex"],
    credits: "XaviaTeam"
}

function onCall({ message }) {
    global.GET(`https://api.waifu.pics/sfw/kill`)
        .then(async res => {
            try {
                let imgStream = await global.getStream(res.data.url);
                message.reply({
                    body: res.data.url,
                    attachment: await global.getStream(res.data.url)
                });
            } catch {
                message.reply("Error!");
            }
        })
        .catch(_ => message.reply("Error!"));
}

export default {
    config,
    onCall
}
