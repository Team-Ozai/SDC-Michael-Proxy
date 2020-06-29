const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.get('/:1', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(4000, () => {
  console.log('Proxy Server is listening on port 4000');
});
