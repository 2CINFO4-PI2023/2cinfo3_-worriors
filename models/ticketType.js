const mongoose = require('mongoose');

const ticketTypeSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    unique:true,

  }
});

const TicketType = mongoose.model('TicketType', ticketTypeSchema);
module.exports = TicketType;
