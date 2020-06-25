const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const html1 = app.get(`http://localhost:3005/api/rewards?projectId=${id}`);
  const html2 = app.get(`http://localhost:3006/api/projects/find?id=${id}`);

});
