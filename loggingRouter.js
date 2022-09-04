const express = require('express');
const router = express.Router();
const { EmbedBuilder, WebhookClient, inlineCode } = require('discord.js');
const { titleWebhookId, titleWebhookToken } = process.env;

const titleWebhook = new WebhookClient({ id: titleWebhookId, token: titleWebhookToken });

router.get("/title-log", async (req, res) => {
    let data
    if (req.query.data) {
        data = JSON.parse(req.query.data);
    } else {
        data = {
            "title": "Test_Title",
            "player": "Player1",
            "target": "Player2",
            "action": "added",
        }   
    }
    

	let title = data.title;
	let target = data.target;
	let player = data.player;
	let action = data.action;
	console.log(data)

	

    let color
    if (action === "added") {
        color = 5763719
    } else if (action === "removed") {
        color = 15548997
    } else {
        res.status(200).json({ "result": "Action is not equal to added or removed" });
    }

    let properties = {
        "Title": "Title Log",
        "Description": `Title giver: ${player} \n Title receiver: ${target} \n Title Name: ${title} \n <t:${Math.floor(Date.now() / 1000)}:F>`,
        "Footer": { "text": `Does this log look incorrect? Contact untold#0830 if this is the case.` },
        "Color": color
    }

    console.log("properties made")
    let embed = await require("./embed")(properties)

    titleWebhook.send({
        embeds: [embed]
    }).then(() => {
        console.log("embed made")
        res.status(200).json({ "result": "Log Created and Sent" });
    });
});

router.get("/crystal-log", async (req, res) => {
	res.status(404).json({ "message": "WIP"})
});

router.get("/arrest-log", async (req, res) => {
    res.status(404).json({ "message": "WIP" }) });

module.exports = router;