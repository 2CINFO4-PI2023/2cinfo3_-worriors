//------------------------ Start : Imports --------------------// 
const express = require('express');
const route = express.Router()

//const services = require('../services/render');

const userController = require('../Controllers/UserController');
const questionController = require('../Controllers/QuestionController');
const ResponseController = require('../Controllers/ResponseController');

//------------------------ End : Imports --------------------// 


//------------------------ FINAL ENDPOINTS --------------------// 

//------------------------ User --------------------// 
route.post('/api/users', userController.create);
route.get('/api/users', userController.find);
route.get('/api/userss/:id', userController.findOne);
route.put('/api/users/:id', userController.update);
route.delete('/api/users/:id', userController.delete);
route.get('/api/users/count', userController.count);

//route.post('/api/users/login/:email', userController.login);

//------------------------ Question routes --------------------// 
route.post('/api/questions', questionController.create);
route.get('/api/questions', questionController.find);
route.get('/api/questionss/:id', questionController.findOne);
route.put('/api/questions/:id', questionController.update);
route.put('/api/solve-question/:id', questionController.updateSolved);
route.delete('/api/question/:id', questionController.delete);
route.get('/api/questions/count', questionController.count);

//------------------------ Response routes  --------------------// 
route.post('/api/responses', ResponseController.create);
route.get('/api/responses', ResponseController.find);
route.get('/api/responsess/:id', ResponseController.findOne);
route.put('/api/responses/:id', ResponseController.update);
route.delete('/api/responses/:id', ResponseController.delete);
route.get('/api/responses/count', ResponseController.count);




module.exports = route  
