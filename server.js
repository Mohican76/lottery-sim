const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let runs = [];

app.post('/api/run', (req, res) => {
  const { numbers, ev } = req.body;
  const run = { id: runs.length + 1, numbers, ev, date: new Date() };
  runs.push(run);
  res.json(run);
});

app.get('/api/runs', (req, res) => {
  res.json(runs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port', PORT));
