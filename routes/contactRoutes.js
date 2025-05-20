const express = require("express");
const Contact = require("./models/contactModels");
const router = express.Router();
router.get('/Contact', async (req, res) => {
    try {
        const Contact = await Contact.find();
        res.send(Contact);
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
    
});
module.exports = router;
