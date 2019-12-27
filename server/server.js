const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const logger = require('./lib/logger');
const config = require('./config/server');

dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

const app = express();

app.use('/static', express.static(path.join(__dirname, 'dist/static')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { sameSite: false },
}));
app.use(passport.initialize());
app.use(passport.session());

logger.log(`Starting express server on ${config.HOST}:${config.PORT}`);
app.listen(config.HOST, config.PORT);
