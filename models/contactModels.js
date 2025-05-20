const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    userId:{
        type:ObjectId,
        
    }
})
module.exports = mongoose.model('Contact', contactSchema);