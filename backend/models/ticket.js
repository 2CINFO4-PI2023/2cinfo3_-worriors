const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TicketType',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  submissionDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Resolved'],
    default: 'Open'
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;


