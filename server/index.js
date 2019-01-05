const express = require('express');
const router = require('./routes.js');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const app = express();

// process.env.PORT |
app.use(compression());
app.use(bodyParser.json());
app.use('/:id', express.static(path.join(__dirname + '/../client/dist')));

app.use('/', router);

let port = 3012
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
}) 
