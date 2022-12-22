const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { engine } = require('express-handlebars');

const indexRouter = require('./routes');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

// view engine setup
app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: 'layout' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use('/', indexRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
