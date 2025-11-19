const { Router } = require('express');
const messageContoller = require('../controllers/messageController');

const messageRouter = Router();
const messages = messageRouter.get('/', messageContoller.getMessages);

messageRouter.get('/new', (req, res) => {
	res.render('form');
});

messageRouter.post('/new', async (req, res) => {
	res.status(200);
	await messageContoller.createNewPost(req, res);
	res.redirect('/');
});

module.exports = messageRouter;
