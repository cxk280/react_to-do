'use strict'

const express           = require('express');
const logger            = require('morgan');
const path              = require('path');

const app               = express();
const port              = process.argv[2] || process.env.PORT || 3009;

app.use(logger('dev'));

app.listen(port, function() {
  console.log('Server is listening on ', port);
})

app.route('/tasks/:id')
   .get((req, res)=> res.send(`view task ${req.params.id}`))
   .put((req, res)=> res.send(`edited task ${req.params.id}`))
   .delete((req, res)=> res.send(`deleted task ${req.params.id}`))

app.route('/tasks')
   .get((req, res)=> res.send('view task list'))
   .post((req, res)=> res.send('posting to task list'))

app.get('/', (req, res)=> res.send('homepage'))


