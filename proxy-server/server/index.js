const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(4000, () => {
  console.log('Proxy Server is listening on port 4000');
});
