const express = require('express')
const morgan = require('morgan'); //logger
const path = require('path');
const debug = require('debug')('app:root')
const mongoose = require('mongoose');
const session = require('express-session');
const flash  = require('connect-flash');
const favicon = require('serve-favicon');
require('dotenv').config()

const app = express();

mongoose.connect(process.env.URL, {
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'public/')));
app.use(favicon(path.join(__dirname, 'public', '/img/favicon.ico')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000}
}));
app.use(flash());

const mailingRouter = require('./src/routes/mailingRoutes')();

app.get('/', (req, res) => {
  res.render('index.ejs', {messages: req.flash('info'), err: req.flash('error')});
});

app.use('/', mailingRouter);

const port = process.env.PORT || 8081;
app.listen(port, function () {
  console.log(`Listening on port ${port}...`)
}) 