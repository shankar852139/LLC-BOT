

const langData = {

    "en_US": {

        "prefix.get": "Hello, i'm DaiTobot"

    },

    "vi_VN": {

        "prefix.call": "𝒙𝒊𝒏 𝒄𝒌𝒂𝒐, 𝒕ớ 𝒍𝒂̀ 𝒃𝒐𝒕 𝒄𝒖̉𝒂 𝒎𝒉𝒖𝒏𝒈𝒅𝒆𝒗"

    }

}

                         

function onCall({ message, getLang, data }) {

    //const newPrefix = args[0];

    if (message.body == global.config.PREFIX && message.senderID != global.botID) {

        message.reply(getLang("prefix.call", {

            prefix: data?.thread?.data?.prefix || global.config.PREFIX  

        }));

    }

    return;

}

export default {

    langData,

    onCall

}

