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
  res.send(data);
});

app.post('/', async(req, res) =>{
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

  res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});