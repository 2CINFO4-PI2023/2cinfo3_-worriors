const mongoose = require("mongoose");

const ticketTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tickets: []
});

const TicketType = mongoose.model("TicketType", ticketTypeSchema);
module.exports = TicketType;
