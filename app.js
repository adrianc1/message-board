const express = require('express');
const path = require('node:path');
const messageRouter = require('./routes/messageRouter.js');

const PORT = 3030;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', messageRouter);

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
