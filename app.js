const express = require( 'express' );
const http = require('http')
const app = express(); // creates an instance of an express application
// const server = http.createServer();

// server.on('request', app)

app.use('/', (req, res, next) => {
  console.log(req.method + ' ' + req.url);

  next();
})


app.get('/', (req, res) => {
  res.send('Welcome!');
})

app.get('/news', (req, res) => {
  res.send('CNN rocks!');
})





















app.listen(3000, () => {console.log('server listening');})
