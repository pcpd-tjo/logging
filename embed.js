const { EmbedBuilder } = require("discord.js");

module.exports = async (properties) => {
    let embed = new EmbedBuilder()
        .setTitle(properties["Title"])
        .setDescription(properties["Description"])
        .setFooter({ "text": "Made by untold#0830" })
        .setColor(properties["Color"])
    return embed
} 