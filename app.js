const express     = require( 'express' );
const app         = express(); // creates instance of express application
const nunjucks    = require('nunjucks');
const routes      = require('./routes');
const bodyParser  = require('body-parser');

//standard express stuff
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });


//==================================
//=======MIDDLEWARE=================
//==================================
app.use(bodyParser.urlencoded({extended: true})); //required for bodyParser
app.use(bodyParser.json({type: 'application/*+json'}));

app.use(express.static('public')); //makes anything in the public directory accessible via url

app.use('/', routes); //creates middleware

app.use('/', (req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});



//=====================================
app.listen(3000, () => {console.log('server listening');})
