const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(3000, () => console.log(`Server is listening on port 3000`));
app.use('/', router);
