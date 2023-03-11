const router = require("express")().Router();

router.get("/", (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.status(200).send("TJO Logging Server - Title Log");
})
