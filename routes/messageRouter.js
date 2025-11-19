const { Router } = require('express');
const messageContoller = require('../controllers/messageController');

const messageRouter = Router();
const messages = messageRouter.get('/', messageContoller.getMessages);

messageRouter.get('/new', (req, res) => {
	res.render('form');
});

messageRouter.post('/new', (req, res) => {
	res.status(200);
	messages.push({
		text: req.body.message,
		user: req.body.name,
		added: new Date(),
	});
	res.redirect('/');
});

module.exports = messageRouter;
