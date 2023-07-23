const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");

// const axios = require('axios');

// const jiraBaseUrl = 'https://your-jira-instance.atlassian.net';
// const apiToken = 'YOUR_JIRA_API_TOKEN';
// const authHeader = `Basic ${Buffer.from(`YOUR_JIRA_EMAIL:${apiToken}`).toString('base64')}`;


// async function createJiraTicket(ticketData) {
// 	try {
// 	  const response = await axios.post(`${jiraBaseUrl}/jiraTicket`, ticketData, {
// 		headers: {
// 		  Authorization: authHeader,
// 		  'Content-Type': 'application/json',
// 		},
// 	  });
  
// 	  // Process the response
// 	  return response.data;
// 	} catch (error) {
// 	  console.error('Error creating ticket:', error.message);
// 	  throw error;
// 	}
//   }  

router.post("/", (req, res) => {
	// validate input (a user and type must exist before hand)
	delete req.body._id;
	const newTicket = new Ticket({...req.body});
	newTicket.save()
		.then((savedTicket) => {
		res.status(201).send(savedTicket);
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).send({ message: err.message });
		});
});

// Route pour obtenir tous les tickets

router.get("/", (req, res) => {
	Ticket.find()
		.then((tickets) => {
			res.json(tickets);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});


router.get('/statistics', async (req, res) => {
	try {
		console.log("here")
	  const totalTickets = await Ticket.countDocuments({});
	  console.log('Total Tickets:', totalTickets);
  
	  const openTickets = await Ticket.countDocuments({ status: 'Open' });
	  console.log('Open Tickets:', openTickets);
  
	  const resolvedTickets = await Ticket.countDocuments({ status: 'Resolved' });
	  console.log('Resolved Tickets:', resolvedTickets);
  
	  const ticketsMonthDistribution = await Ticket.aggregate([
		{
		  $group: {
			_id: { $month: '$submissiondate' },
			count: { $sum: 1 },
		  },
		},
	  ]);
	  console.log('Monthly Tickets:', ticketsMonthDistribution);
  
	  const ticketPriorityDistribution = await Ticket.aggregate([
		{
		  $group: {
			_id: '$priority',
			count: { $sum: 1 },
		  },
		},
	  ]);
	  console.log('Priority Distribution:', ticketPriorityDistribution);
  
	      // Calculate Tickets Status Distribution in percentage
		  const totalTicketsCount = await Ticket.countDocuments();
		  const statusDistribution = await Ticket.aggregate([
			{
			  $group: {
				_id: '$status',
				count: { $sum: 1 },
			  },
			},
			{
			  $project: {
				status: '$_id',
				percentage: { $multiply: [{ $divide: ['$count', totalTicketsCount] }, 100] },
				_id: 0,
			  },
			},
		  ]);

  
	  const statistics = {
		totalTickets,
		openTickets,
		resolvedTickets,
		ticketsMonthDistribution,
		ticketPriorityDistribution,
		statusDistribution,
	  };
  
	  res.json(statistics);
	} catch (err) {
	  console.error('Error:', err);
	  console.log(err)
	  res.status(500).json({ error: 'Failed to fetch statistics' });
	}
  });


// Route pour obtenir un ticket spécifique
router.get("/:id", (req, res) => {
	Ticket.findById(req.params.id)
		.then((ticket) => {
			if (ticket) {
				return res.status(200).send(ticket);
			} else {
				return res.status(404).send("not found");
			}
		})
		.catch((err) => res.status(500).send("server error"));
});

router.get("/user/userid");

//gives all the tickets of the user
router.get("/me", (req, res) => {
	const userId = req.user.id;
	Ticket.find({ userId })
		.then((tickets) => {
			res.json(tickets);
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

//gives a specific ticket of a user
router.get("/me/:id", (req, res) => {
	const userId = req.user.id;
	const ticketId = req.params.id;

	Ticket.findOne({ _id: ticketId, userId })
		.then((ticket) => {
			if (ticket) {
				res.json(ticket);
			} else {
				res.status(404).json({ message: "Ticket not found" });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

// Route pour mettre à jour un ticket
router.put("/:id", (req, res) => {
	let { status, submissionDate, description } = req.body;
	Ticket.findByIdAndUpdate(req.params.id, { status, description, submissionDate })
		.then((ticket) => {
			if (ticket) {
				res.json(ticket);
			} else {
				res.status(404).json({ message: "Ticket non trouvé" });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

// Route pour supprimer un ticket
router.delete("/:id", (req, res) => {
	Ticket.findByIdAndRemove(req.params.id)
		.then((ticket) => {
			if (ticket) {
				res.json({ message: "Ticket supprimé avec succès" });
			} else {
				res.status(404).json({ message: "Ticket non trouvé" });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});
  

module.exports = router;
