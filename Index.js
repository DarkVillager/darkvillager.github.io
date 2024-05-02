const fs = require('@cyclic.sh/s3fs')(process.env.CYCLIC_BUCKET_NAME);
const Path = require('path');
const express = require('express');
const app = express();
const port = 80;

function ThroughDirectory(Directory) {
	fs.readdirSync(Directory).forEach((File) => {
		const Absolute = Path.join(Directory, File);
		if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
		else return Files.push(Absolute);
	});
}

ThroughDirectory('./');

app.get('/', function (req, res) {
	res.sendFile(fs.readFileSync('index.html').toString());
	res.end();
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
