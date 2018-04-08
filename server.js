const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
var cons = require('consolidate');
var session = require('express-session');

const user = require('./routes/user');
const userdisplay = require('./public/userdisplay');
const comicdisplay = require('./public/comicdisplay');
const seriesdisplay = require('./public/seriesdisplay');
const creatordisplay = require('./public/creatordisplay');
const characterdisplay = require('./public/characterdisplay');
const favoriteCreators = require('./public/favoriteCreators');
const favoriteCharacters = require('./public/favoriteCharacters');
const favoriteComics = require('./public/favoriteComics');
const favoriteSeries = require('./public/favoriteSeries');
const recommendations = require('./public/recommendations');
const additems = require('./public/additems');
const getprofile = require('./public/getprofile');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({secret: "garbage", resave: false, saveUninitialized: true}));
app.set('port', (process.env.PORT || 8080));
const router = express.Router();
var connection;

var hs = hbs.create({
  defaultLayout: 'index'
});

/* Database connection configuration */
if(process.env.JAWSDB_URL) { /* Heroku remote database environment variable */
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log("We connected to Jaws\n");
} else {
    connection = mysql.createConnection({
      host      : 'comicdb.cc24nnrynf7v.us-east-2.rds.amazonaws.com',
      user      : 'comic',
      password  : 'Comic',
      database  : 'ComicArchive'
    });
}

/* Establish database connection */
connection.connect((err) => {
    if(err) {
        console.log('Could not establish connection to AWS database\n');
    } else {
        console.log('Connection successful\n');
    }
});

global.db = connection;


/* Serve public folder to express */
app.engine('html', require('hbs').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/public');
app.set('view engine', 'hbs');

/* Handle routes for sign up & login */
//app.get('/index')
app.get('/signup', user.signup);
app.post('/signup', user.signup);

app.get('/login', user.login);
app.post('/login', user.login);

app.use('/userdisplay', userdisplay.list);
//app.post('/userdisplay.html', userdisplay.list);

app.get('/addtodatabase', function(req, res) {
  res.render('contribute.html');
});

app.get('/favorites', function(req, res) {
  res.render('favorites', {fname: req.session.firstname});
})

app.get('/profile', getprofile.profile);

app.get('/comicdisplay', comicdisplay.list);
app.get('/seriesdisplay', seriesdisplay.list);
app.get('/creatordisplay', creatordisplay.list);
app.get('/characterdisplay', characterdisplay.list);


app.post('/favoriteCreator', favoriteCreators.insertcreators);
app.post('/favoriteCharacters', favoriteCharacters.insertcharacters);
app.post('/favoriteComics', favoriteComics.insertcomics);
app.post('/favoriteSeries', favoriteSeries.insertseries);

app.get('/faveCreators', favoriteCreators.favorites);
app.get('/faveCharacters', favoriteCharacters.favorites);
app.get('/faveComics', favoriteComics.favorites);
app.get('/faveSeries', favoriteSeries.favorites);

app.post('/recommended', recommendations.rec);

app.post('/addCreator', additems.addcreator);
app.post('/addComic', additems.addcomic);
app.post('/addSeries', additems.addseries);
app.post('/addCharacter', additems.addchar);


app.listen(app.get('port'), () => {
    console.log('Node application is running on PORT 8080');
});

module.exports = app;
