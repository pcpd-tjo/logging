const express = require('express');
const router = express.Router();
const { EmbedBuilder, WebhookClient, inlineCode } = require('discord.js');
const { titleWebhookId, titleWebhookToken, crystalWebhookId, crystalWebhookToken } = process.env;

const Colors = require("./Colors.js");

const { getIdFromUsername } = require("noblox.js")

const titleWebhook = new WebhookClient({ id: titleWebhookId, token: titleWebhookToken });

router.get("/title-log", async (req, res) => {
    let data
    if (req.query.data) {
        data = JSON.parse(req.query.data);
    } else {
        let actions = [
            "added",
            "removed"
        ]
        data = {
            "title": "Test", 
            "player": "UntoldGam",
            "target": "Dev_Untold",
            "action": actions[Math.floor(Math.random() * actions.length)] // chooses "added" or "removed"
        }   
    }
    

	let title = data.title;
	let target = data.target;
	let player = data.player;
	let action = data.action;
	console.log(data)
    let color
    let text
    if (action === "added") {
        color = 5763719
        text = `Title Giver: ${player} \n Title Receiever: ${target}`
    } else if (action === "removed") {
        color = 15548997
        text = `Title Editor: ${player} \n Title Receiever: ${target}`
    }

    let properties = {
        "Title": "Title Log",
        "Description": `Title Editor: ${player} (${await getIdFromUsername(player)}) \n Player Affected: ${target} (${await getIdFromUsername(target)}) \n Title ${action.charAt(0).toUpperCase() + action.slice(1)}: ${title} \n <t:${Math.floor(Date.now() / 1000)}:F>`,

        "Description": `Title giver: ${player} \n Title receiver: ${target} \n Title Name: ${title} \n <t:${Math.floor(Date.now() / 1000)}:F>`,
        "Color": color
    }

    console.log("properties made")
    let embed = await require("./embed")(properties);

    titleWebhook.send({
        embeds: [embed]
    }).then(() => {
        console.log("embed made");
        res.status(200).json({ "result": "Log Created and Sent" });
    }).catch(console.log);

});

const crystalWebhook = new WebhookClient({ id: crystalWebhookId, token: crystalWebhookToken });

router.get("/crystal-log", async (req, res) => {
    let data
    if (req.query.data) {
        data = JSON.parse(req.query.data);
    } else {
        let actions = [
            "added",
            "removed"
        ]
        data = {
            "crystal": "Pink", 
            "player": "UntoldGam",
            "target": "Dev_Untold",
            "cg": "true",
            "reason": "Testing",
            "action": actions[Math.floor(Math.random() * actions.length)]
        }   
    }

    let crystal_colour = data.crystal; // string
	let targetplayer = data.target; // string 
	let cg = Boolean(data.cg); // true or false
	let player = data.player; 
	let reason = data.reason; // a string
    let action = data.action; // added or removed : a string

	let reasonStr = cg === true ? "Crystal Gathering" : reason
    let actionStr = action.charAt(0).toUpperCase() + action.slice(1)
	let colourStr = (crystal_colour.charAt(0).toUpperCase() + crystal_colour.slice(1)).replace(/ /g,'')
    let HexColour = Colors[colourStr]
    console.log(colourStr,HexColour)
    let properties = {
        "Title": "Crystal Log",
        "Description": `Crystal Editor: ${player} (${await getIdFromUsername(player)}) \n Player Affected: ${targetplayer} (${await getIdFromUsername(targetplayer)}) \n Crystal ${actionStr}: ${colourStr} \n Reason: ${reasonStr} \n <t:${Math.floor(Date.now() / 1000)}:F>`,
        "Color": HexColour
    }
    let embed = await require("./embed.js")(properties)
    
	crystalWebhook.send({
			embeds: [embed]
	}).then(() => {
        console.log("Embed made")
        res.status(200).json({"result": "Log Created and Sent"})
    }).catch(console.log);
});

router.get("/arrest-log", async (req, res) => {
    res.status(404).json({ "message": "WIP" }) 
});

module.exports = router;