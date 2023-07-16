const express = require("express");
const router = express.Router();
const TicketType = require("../model/ticketType");

// Route pour créer un type de ticket
router.post("/", (req, res) => {
  const newTicketType = new TicketType(req.body);
  newTicketType.save().then(savedTicketType => {
      res.status(201).json(savedTicketType);
    }).catch(err => {
      console.log(err)
      return res.status(500).send({ message: err.message })
    });
});

// Route pour obtenir tous les types de tickets
router.get('/', (req, res) => {
  Ticket.find()
    .then(ticketTypes => {
      res.json(ticketTypes);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Route pour obtenir un type de ticket spécifique
router.get('/:id', (req, res) => {
  TicketType.findById(req.params.id).then(ticketType => {
    if (ticketType) {
      return res.status(200).send(ticketType)
    } else {
      return res.status(404).send("not found")
    }
  }).catch(err => res.status(500).send("server error"))

});

// Route pour mettre à jour un type de ticket
rrouter.put('/:id', (req, res) => {
  TicketType.findById(req.params.id)
    .then(ticketType => {
      if (ticketType) {
        res.json(ticketType);
      } else {
        res.status(404).json({ message: 'Type de ticket non trouvé' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Route pour supprimer un type de ticket
router.delete('/:id', (req, res) => {
  TicketType.findByIdAndRemove(req.params.id)
    .then(ticketType => {
      if (ticketType) {
        res.json({ message: 'Type de ticket supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Type de ticket non trouvé' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
