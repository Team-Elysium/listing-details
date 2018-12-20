const express = require('express');
const Router = require('./routes.js');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// process.env.PORT |

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '../client')));

// app.get('/', (req, res) => {
//   // res.redirect('/items/1');
//   console.log('hello');
// });

app.use('/', Router);

let port = 3012
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
}) 
