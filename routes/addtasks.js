var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {

    res.send("Monkey Moo")
})

router.post("/", (req, res) => {
    console.log(req.body)
    res.send("Request Received")
});

module.exports = router;