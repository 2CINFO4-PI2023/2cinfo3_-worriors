const express = require('express');
const router = express.Router();
const Ticket = require('../model/ticket');


router.post('/', (req, res) => {
  // validate input (a user and type must exist before hand)
  const newTicket = new Ticket(req.body);
  newTicket.save().then(savedTicket => {
    res.status(201).send(savedTicket)
  }).catch(err => {
    console.log(err)
    return res.status(500).send({ message: err.message })

  });
});

// Route pour obtenir tous les tickets

router.get('/', (req, res) => {
  Ticket.find()
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});


// Route pour obtenir un ticket spécifique
router.get('/:id', (req, res) => {
  Ticket.findById(req.params.id).then(ticket => {
    if (ticket) {
      return res.status(200).send(ticket)
    } else {
      return res.status(404).send("not found")
    }
  }).catch(err => res.status(500).send("server error"))

});

router.get("/user/userid")


//gives all the tickets of the user
router.get('/me', (req, res) => {
  const userId = req.user.id;
  Ticket.find({ userId })
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


//gives a specific ticket of a user
router.get('/me/:id', (req, res) => {
  const userId = req.user.id; 
  const ticketId = req.params.id;
  
  Ticket.findOne({ _id: ticketId, userId })
    .then(ticket => {
      if (ticket) {
        res.json(ticket);
      } else {
        res.status(404).json({ message: 'Ticket not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});



// Route pour mettre à jour un ticket
router.put('/:id', (req, res) => {
  let {status, submissionDate, content}=req.body;
  Ticket.findByIdAndUpdate(req.params.id,{status,content,submissionDate})
    .then(ticket => {
      if (ticket) {
        res.json(ticket);
      } else {
        res.status(404).json({ message: 'Ticket non trouvé' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Route pour supprimer un ticket
router.delete('/:id', (req, res) => {
  Ticket.findByIdAndRemove(req.params.id)
    .then(ticket => {


      if (ticket) {
        res.json({ message: 'Ticket supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Ticket non trouvé' });
      }

    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});



module.exports = router;
