const { EmbedBuilder } = require("discord.js");

module.exports = async (properties) => {
<<<<<<< HEAD
    console.dir(properties)
    let embed = new EmbedBuilder()
        .setTitle(properties["Title"])
        .setDescription(properties["Description"])
        .setFooter({ "text": "Made by UntoldGam","iconURL":"https://tr.rbxcdn.com/0bf1e583833b37648d2145075ffec876/150/150/Image/Png" })
=======
    let embed = new EmbedBuilder()
        .setTitle(properties["Title"])
        .setDescription(properties["Description"])
        .setFooter({ "text": "Made by untold#0830" })
>>>>>>> 6ff4490e6f1e5ec6409a3845c2ffe5a0dc9a9b26
        .setColor(properties["Color"])
    return embed
} 