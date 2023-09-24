const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.json())
const port = process.env.PORT || 5000;


const fs = require('fs')

app.get('/express_backend', (req, res) => {
  res.send({ express: 'your express backend is connected to react' });
});

app.get('/my-data', (req, res) => {
  const myData = fs.readFileSync('./data.json', { encoding: 'utf8'})
  res.send(myData)
})

app.post('/my-data', (req, res) => {
  const data = req.body
  fs.writeFileSync('./data.json', JSON.stringify(data), {encoding: 'utf8', flag: 'w'})
  res.sendStatus(200);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
