const mongoose = require("mongoose")

const UserSchema= new mongoose.Schema({

    name: String,
    password: String,
    reg: Number,
    email: String
    
})

const UserModel = mongoose.model("students",UserSchema)

module.exports = UserModel