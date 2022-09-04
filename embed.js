const { EmbedBuilder } = require("discord.js");

module.exports = async (properties) => {
    let embed = new EmbedBuilder()
        .setTitle(properties["Title"])
        .setDescription(properties["Description"])
        .setFooter(properties["Footer"])
        .setColor(properties["Color"])
    return embed
}