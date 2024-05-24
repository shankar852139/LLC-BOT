import fetch from "node-fetch";

const config = {
  "name": "sim",
  "aliases": ["s"],
  "description": "Chat with Sim",
  "usage": "<text>",
  "cooldown": 3,
  "permissions": [0, 1, 2],
  "credits": "WaifuCat",
  "extra": {}
};

async function onCall({message, args}) {
  const text = encodeURIComponent(args.join(" "));
  const url = `https://simsimi.fun/api/v2/?mode=talk&lang=en&message=${text}&filter=true`;
  const apiResponse = await fetch(url);
  const responseJson = await apiResponse.json();

  if (responseJson.success) {
    message.send(responseJson.success);
  } else {
    message.send("Sorry, I couldn't understand your message.");
  }
}

export default {
  config,
  onCall,
};