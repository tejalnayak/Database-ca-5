const express = require("express");
const User = require("./models/userModels");
const router = express.Router();
router.get('/User', async (req, res) => {
    try {
        const User = await User.find();
        res.send(User);
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
    
});
module.exports = router;
