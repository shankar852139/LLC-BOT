export default function ({ message }) { 
    if ( global.random(0, 5) === 3 ) {
        message.reply("Update Logs :\n+added .system\n+fixed .fbdown");
    }
}