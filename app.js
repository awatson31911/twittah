const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const routes = require('./routes');

//standard express stuff
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(express.static('public'));

app.use('/', routes); //creates middleware

app.use('/', (req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
})




// app.get('/', (req, res) => {
//   res.send('Welcome!');
// })

// app.get('/news', (req, res) => {
//   res.send('CNN rocks!');
// })


// let peoples = [{name: 'Boris'}, {name: 'Anthony'}, {name: 'Casio'}];

// app.get('/example', (req, res) => {
//   res.render('index', {title: 'The Greatest Story Never Told', people: peoples});
// })




















app.listen(3000, () => {console.log('server listening');})
