require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const express = require('express');
const cors = require('cors');

//Import router;
const userRouter = require('./routes/user.router');
const critereRouter = require('./routes/critere.router');
const demeureRouter = require('./routes/demeure.router');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Protect from CORS error
app.use(cors());

app.use('/users', userRouter);
app.use('/criteres', critereRouter);
app.use('/demeures', demeureRouter);

app.listen(port, () => {
});

module.exports = app;
