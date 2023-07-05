const { EmbedBuilder } = require("discord.js");


module.exports = async (properties) => {
    console.dir(properties)
    let embed = new EmbedBuilder()
        .setTitle(properties["Title"])
        .setDescription(properties["Description"])
        .setFooter({ "text": "Made by UntoldGam","iconURL":"https://tr.rbxcdn.com/0bf1e583833b37648d2145075ffec876/150/150/Image/Png" })
        .setColor(properties["Color"])
    return embed
} 