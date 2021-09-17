module.exports = async (client) => {
  client.Ready = true, 
  setInterval(() => {
        let names = ["international love", "dat booty shake", "to mr worldwide", "my own concerts"];
        let types = ["PLAYING", "WATCHING", "LISTENING", "STREAMING"];
        let random = Math.floor(Math.random() * (names.length - 1) + 1);
        client.user.setPresence({
        status: "online",  // You can show online, idle, and dnd
        activity: {
            name: names[random],  // The message shown
            type: types[random], // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
  }, 690000);
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
client.RegisterSlashCommands();
};

