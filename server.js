const express = require('express');
const app = express();

app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});