const db = require('../db/queries');

async function getMessages(req, res) {
	const messages = await db.getAllMessages();
	console.log('messages: ', messages);
	res.json({ message: messages });
}

async function createNewPost(req, res) {
	const { user, message } = req.body;
	await db.addMessage(user, message);
	res.redirect('/');
}

module.exports = {
	getMessages,
	createNewPost,
};
