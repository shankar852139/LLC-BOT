﻿const config = {
  name: "vu",
  aliases: [""], 
  description: "random gai",
  version: "1.0.0",
  permissions: [0, 1, 2],
  credits: "VKN"
};

const images = [
 "https://i.imgur.com/gzqeyE8.jpg",
"https://i.imgur.com/R6IANqE.jpg",
"https://i.imgur.com/8bnuchD.jpg",
"https://i.imgur.com/YiX4yS9.jpg",
"https://i.imgur.com/8IUaxtx.jpg",
"https://i.imgur.com/YOZumYn.jpg",
"https://i.imgur.com/L2emsEt.jpg",
"https://i.imgur.com/EJbGaqx.jpg",
"https://i.imgur.com/nq2y7ym.jpg",
"https://i.imgur.com/yRBuo11.jpg",
 "https://i.imgur.com/NlxnQ59.jpg",
 "https://i.imgur.com/epTOxm6.jpg",
 "https://i.imgur.com/XcIRZLC.jpg",
 "https://i.imgur.com/TmGWPiL.jpg",
 "https://i.imgur.com/0eCIMV0.jpg",
 "https://i.imgur.com/TfCkg8u.jpg",
 "https://i.imgur.com/Dq6wWir.jpg",
 "https://i.imgur.com/tIv21bm.jpg",
 "https://i.imgur.com/ihMwIEt.jpg",
 "https://i.imgur.com/ZnOET7L.jpg",
 "https://i.imgur.com/FUqt1tH.jpg",
 "https://i.imgur.com/Ye3kd1w.jpg",
 "https://i.imgur.com/Ye3kd1w.jpg",
 "https://i.imgur.com/JrQFys8.jpg",
 "https://i.imgur.com/CcjNaLN.jpg",
 "https://i.imgur.com/LP8T3mQ.jpg",
 "https://i.imgur.com/iZowivb.jpg",
 "https://i.imgur.com/lnxKJq3.jpg",
 "https://i.imgur.com/umAtpfL.jpg",
 "https://i.imgur.com/lHcNHpO.jpg",
 "https://i.imgur.com/rPtPNwO.jpg",
 "https://i.imgur.com/tK5LfDo.jpg",
 "https://i.imgur.com/7Gwdck8.jpg",
 "https://i.imgur.com/shKHJA1.jpg",
 "https://i.imgur.com/WDkUJ3W.jpg",
 "https://i.imgur.com/qdpAz9D.jpg",
 "https://i.imgur.com/pN0MQq0.jpg",
 "https://i.imgur.com/jCbIrvf.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/mJQg7uj.jpg",
 "https://i.imgur.com/B1DoMjW.jpg",
 "https://i.imgur.com/q0IlBCJ.jpg",
 "https://i.imgur.com/7hDj4L4.jpg",
 "https://i.imgur.com/Re9AsfE.jpg",
 "https://i.imgur.com/CpbKXNb.jpg",
 "https://i.imgur.com/X2BmpO3.jpg",
 "https://i.imgur.com/ENhF9SY.jpg",
 "https://i.imgur.com/4nB8n51.jpg",
 "https://i.imgur.com/m2wKvRA.jpg",
 "https://i.imgur.com/94rTn2J.jpg",
 "https://i.imgur.com/p4PFHFv.jpg",
 "https://i.imgur.com/jXpS8gy.jpg",
 "https://i.imgur.com/2JG2N7E.jpg",
 "https://i.imgur.com/vpXTclR.jpg",
 "https://i.imgur.com/JtTFWxM.jpg",
 "https://i.imgur.com/Ei6pnbi.jpg",
 "https://i.imgur.com/flxVpyd.jpg",
 "https://i.imgur.com/bGWUZKF.jpg",
 "https://i.imgur.com/vWdKqGD.jpg",
 "https://i.imgur.com/kGw8EBS.jpg",
 "https://i.imgur.com/jIr8RX2.jpg",
 "https://i.imgur.com/AOFNeLA.jpg",
 "https://i.imgur.com/dGAost4.jpg",
 "https://i.imgur.com/uLknKoJ.jpg",
 "https://i.imgur.com/RXP9628.jpg",
 "https://i.imgur.com/UQHsdPU.jpg",
 "https://i.imgur.com/aJqkHbN.jpg",
 "https://i.imgur.com/oKg3RlD.jpg",
 "https://i.imgur.com/ZUG1cGv.jpg",
 "https://i.imgur.com/pFkJoGW.jpg",
 "https://i.imgur.com/ovfmT5W.jpg",
 "https://i.imgur.com/vrVWU0V.jpg",
    "https://i.imgur.com/gzqeyE8.jpg",
"https://i.imgur.com/R6IANqE.jpg",
"https://i.imgur.com/8bnuchD.jpg",
"https://i.imgur.com/YiX4yS9.jpg",
"https://i.imgur.com/8IUaxtx.jpg",
"https://i.imgur.com/YOZumYn.jpg",
"https://i.imgur.com/L2emsEt.jpg",
"https://i.imgur.com/EJbGaqx.jpg",
"https://i.imgur.com/nq2y7ym.jpg",
"https://i.imgur.com/yRBuo11.jpg",
 "https://i.imgur.com/NlxnQ59.jpg",
 "https://i.imgur.com/epTOxm6.jpg",
 "https://i.imgur.com/XcIRZLC.jpg",
 "https://i.imgur.com/TmGWPiL.jpg",
 "https://i.imgur.com/0eCIMV0.jpg",
 "https://i.imgur.com/TfCkg8u.jpg",
 "https://i.imgur.com/Dq6wWir.jpg",
 "https://i.imgur.com/tIv21bm.jpg",
 "https://i.imgur.com/ihMwIEt.jpg",
 "https://i.imgur.com/ZnOET7L.jpg",
 "https://i.imgur.com/FUqt1tH.jpg",
 "https://i.imgur.com/Ye3kd1w.jpg",
 "https://i.imgur.com/Ye3kd1w.jpg",
 "https://i.imgur.com/JrQFys8.jpg",
 "https://i.imgur.com/CcjNaLN.jpg",
 "https://i.imgur.com/LP8T3mQ.jpg",
 "https://i.imgur.com/iZowivb.jpg",
 "https://i.imgur.com/lnxKJq3.jpg",
 "https://i.imgur.com/umAtpfL.jpg",
 "https://i.imgur.com/lHcNHpO.jpg",
 "https://i.imgur.com/rPtPNwO.jpg",
 "https://i.imgur.com/tK5LfDo.jpg",
 "https://i.imgur.com/7Gwdck8.jpg",
 "https://i.imgur.com/shKHJA1.jpg",
 "https://i.imgur.com/WDkUJ3W.jpg",
 "https://i.imgur.com/qdpAz9D.jpg",
 "https://i.imgur.com/pN0MQq0.jpg",
 "https://i.imgur.com/jCbIrvf.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/mJQg7uj.jpg",
 "https://i.imgur.com/B1DoMjW.jpg",
 "https://i.imgur.com/q0IlBCJ.jpg",
 "https://i.imgur.com/7hDj4L4.jpg",
 "https://i.imgur.com/Re9AsfE.jpg",
 "https://i.imgur.com/CpbKXNb.jpg",
 "https://i.imgur.com/X2BmpO3.jpg",
 "https://i.imgur.com/ENhF9SY.jpg",
 "https://i.imgur.com/4nB8n51.jpg",
 "https://i.imgur.com/m2wKvRA.jpg",
 "https://i.imgur.com/94rTn2J.jpg",
 "https://i.imgur.com/p4PFHFv.jpg",
 "https://i.imgur.com/jXpS8gy.jpg",
 "https://i.imgur.com/2JG2N7E.jpg",
 "https://i.imgur.com/vpXTclR.jpg",
 "https://i.imgur.com/JtTFWxM.jpg",
 "https://i.imgur.com/Ei6pnbi.jpg",
 "https://i.imgur.com/flxVpyd.jpg",
 "https://i.imgur.com/bGWUZKF.jpg",
 "https://i.imgur.com/vWdKqGD.jpg",
 "https://i.imgur.com/kGw8EBS.jpg",
 "https://i.imgur.com/jIr8RX2.jpg",
 "https://i.imgur.com/AOFNeLA.jpg",
 "https://i.imgur.com/dGAost4.jpg",
 "https://i.imgur.com/uLknKoJ.jpg",
 "https://i.imgur.com/RXP9628.jpg",
 "https://i.imgur.com/UQHsdPU.jpg",
 "https://i.imgur.com/aJqkHbN.jpg",
 "https://i.imgur.com/oKg3RlD.jpg",
 "https://i.imgur.com/ZUG1cGv.jpg",
 "https://i.imgur.com/pFkJoGW.jpg",
 "https://i.imgur.com/ovfmT5W.jpg",
 "https://i.imgur.com/vrVWU0V.jpg"  
];

function getRandomIndex(arr) {
  const max = arr.length - 1;
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function onCall({ message }) {
  try {
    if (images.length === 0) return message.reply(getLang("error"));

    const index = getRandomIndex(images);
    const image = images[index];

    const imageStream = await global.getStream(image);
    await message.reply({
      body: 'To và tròn 😍',
      attachment: [imageStream]
    });
  } catch (e) {
    message.reply(getLang("error"));
  }

  return;
}

export default {
  config,
  onCall
};
