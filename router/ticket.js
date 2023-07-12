const express = require('express');
const router = express.Router();
const Ticket = require('../model/ticket');


router.post('/tickets', (req, res, next) => {
  const newTicket = new Ticket(req.body);
  newTicket.save().then(savedTicket=>{
    req.status(201).send(savedTicket)
  }).catch(err=>req.status(500).send({message:err.message}));
});

// Route pour obtenir tous les tickets
router.get('/tickets', (req, res,next) => {
  Ticket.find()
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});


// Route pour obtenir un ticket spécifique
router.get('/tickets/:id', (req, res,next) => {
  Ticket.findById(req.params.id, (err, ticket) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      if (ticket) {
        res.json(ticket);
      } else {
        res.status(404).json({ message: 'Ticket non trouvé' });
      }
    }
  });
});

// Route pour mettre à jour un ticket
router.get('/tickets/:id', (req, res,next) => {
  Ticket.findById(req.params.id)
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
router.delete('/tickets/:id', (req, res,next) => {
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
