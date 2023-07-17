const mongoose = require('mongoose');

const ticketTypeSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    unique:true,
  }
});

const TicketType = mongoose.model('TicketType', ticketTypeSchema);
module.exports = TicketType;
