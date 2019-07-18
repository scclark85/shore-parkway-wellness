const path = require("path");
const router = require("express").Router();

router.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname + "/client/build/index.html"));
});

module.exports = router;