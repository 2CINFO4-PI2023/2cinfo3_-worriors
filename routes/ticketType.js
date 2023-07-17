const express = require('express');
const router = express.Router();
const TicketType = require('../model/ticketType');

// Route pour créer un type de ticket
router.post('/ticketTypes', (req, res) => {
  const newTicketType = new TicketType(req.body);
  newTicketType.save((err, ticketType) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(ticketType);
    }
  });
});

// Route pour obtenir tous les types de tickets
router.get('/ticketTypes', (req, res) => {
  TicketType.find({}, (err, ticketTypes) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(ticketTypes);
    }
  });
});

// Route pour obtenir un type de ticket spécifique
router.get('/ticketTypes/:id', (req, res) => {
  TicketType.findById(req.params.id, (err, ticketType) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      if (ticketType) {
        res.json(ticketType);
      } else {
        res.status(404).json({ message: 'Type de ticket non trouvé' });
      }
    }
  });
});

// Route pour mettre à jour un type de ticket
router.put('/ticketTypes/:id', (req, res) => {
  TicketType.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, ticketType) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        if (ticketType) {
          res.json(ticketType);
        } else {
          res.status(404).json({ message: 'Type de ticket non trouvé' });
        }
      }
    }
  );
});

// Route pour supprimer un type de ticket
router.delete('/ticketTypes/:id', (req, res) => {
  TicketType.findByIdAndRemove(req.params.id, (err, ticketType) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      if (ticketType) {
        res.json({ message: 'Type de ticket supprimé avec succès' });
      } else {
        res.status(404).json({ message: 'Type de ticket non trouvé' });
      }
    }
  });
});

module.exports = router;
