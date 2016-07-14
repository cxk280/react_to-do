'use strict'

const express           = require('express');
const logger            = require('morgan');
const path              = require('path');

const homeRoute         = require('./routes/home_route');
const tasksRoute        = require('./routes/tasks_route');

const app               = express();
const port              = process.env.PORT || 3009;

app.use(logger('dev'));

app.use('/', homeRoute);
app.use('/tasks', tasksRoute);

app.listen(port, function() {
  console.log('Server is listening on ', port);
})
