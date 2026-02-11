const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = './data.txt';

app.post('/write', (req, res) => {
  const { text } = req.body;

  fs.writeFile(FILE_PATH, text, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Write failed' });
    }
    res.json({ message: 'File written successfully' });
  });
});


app.get('/read', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Read failed' });
    }
    res.json({ content: data });
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});


