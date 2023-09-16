const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    forum_question_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Questionsdb'}, // linked to the Forum question
    response: String, // response to the question
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}, // linked to the user who posted the response
    date_posted:{type : Date, default: Date.now},
})

const Responsedb = mongoose.model('Responsedb', schema);

module.exports = Responsedb;