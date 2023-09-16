const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    username: { type: String, required: false , unique: false},
    password: { type: String, required: false },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    email: { type: String, required: false , unique: false},
    phone: { type: String, required: false , unique: false},
    address: { type: String, required: false },
    age:{type : String },
    CreatedAt:{type : Date, default: Date.now},
})

const Userdb = mongoose.model('user', schema);

module.exports = Userdb;