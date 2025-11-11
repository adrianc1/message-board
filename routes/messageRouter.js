const { Router } = require('express');
const messageRouter = Router();

messageRouter.get('/', (req, res) => {
	const messages = [
		{
			text: 'Hi there!',
			user: 'Amando',
			added: new Date(),
		},
		{
			text: 'Hello World!',
			user: 'Charles',
			added: new Date(),
		},
	];
	res.render('index', { title: 'Mini Messageboard', messages: messages });
});

messageRouter.get('/new', (req, res) => {
	res.render('form');
});

messageRouter.post('/new', (req, res) => {
	res.status(200).render('form');
});

module.exports = messageRouter;
