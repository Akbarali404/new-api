const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});