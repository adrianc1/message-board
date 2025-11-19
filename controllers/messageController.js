const db = require('../db/queries');
require('express');

async function getMessages(req, res) {
	const messages = await db.getAllMessages();
	console.log('messages: ', messages);

	res.render('index', {
		title: 'Mini Messageboard',
		messages: messages,
	});
}

async function createNewPost(req, res) {
	const { username, message } = req.body;
	await db.addMessage(username, message);
}

module.exports = {
	getMessages,
	createNewPost,
};
