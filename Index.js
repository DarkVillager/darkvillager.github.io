const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
	const options = {
		root: `${__dirname}/dist/`,
	};
	res.sendFile('index.html', options);
	res.end(transform);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
