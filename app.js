const express = require('express');
const path = require('node:path');

const PORT = 3030;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
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
	res.render('index', { message: 'EJS rocks!', title: 'Message Board' });
});

app.get('/new', (req, res) => {});

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
