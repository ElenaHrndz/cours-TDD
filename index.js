var express = require('express');
var axios = require('axios');
var parser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));
 
// parse application/json
app.use(parser.json());

app.get('/', async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  res.status(200).send(data);
});

app.post('/', async(req, res) => {
  const { body } = req
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body)

  res.status(201).send(data);
});

app.put('/:id', async(req, res) => {
  const { body } = req
  const { id } = req.params
  await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)

  res.sendStatus(204)
});

app.delete('/:id', async(req, res) => {
  const { id } = req.params
  const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

  res.sendStatus(204);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});