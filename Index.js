const fs = require('@cyclic.sh/s3fs')(process.env.CYCLIC_BUCKET_NAME);
const express = require('express');
const app = express();
const port = 80;

app.get('/', function (req, res) {
	res.sendFile(fs.readFileSync('index.html').toString());
	res.end();
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
