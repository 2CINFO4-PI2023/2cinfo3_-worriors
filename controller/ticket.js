// find one by id
// find one by id / book id
// find one by id / user id

const Ticket = require("../model/ticket")

const findTicketById = async (id) =>{
 return await Ticket.findById(id);
}
// const findTicketByIdBookId = (id,bookId) =>{

// }
const findTicketsUserId = async (userId) =>{
  return await Ticket.find({userId:userId})
}

module.exports = {
  findTicketById,
  findTicketByIdBookId,
  findTicketByIdUserId,
}