const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {type : String },
    description:{type : String },
    category:{type : String },
    //user_id:Number,
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    solved:Boolean, // to have the check or x
    date_posted:{type : Date, default: Date.now},
})

const Questionsdb = mongoose.model('Questionsdb', schema);

module.exports = Questionsdb;