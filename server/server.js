const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname + '../client')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
}) 