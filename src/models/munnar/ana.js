const mongoose = require("mongoose");
const validator = require("validator");


const anaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    rating: {
        type: Number,

    },
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true,
    },

    date: {
        type: Date,
        default: Date.now
    }


});

const ana = new mongoose.model("Ana", anaSchema);
module.exports = ana;