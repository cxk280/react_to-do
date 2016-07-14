const router = require('express').Router();

router.get('/', function(req,res) {
  res.send('tasks GET connected')
})

router.get('/:id', function(req,res) {
  res.send('tasks id GET connected')
})

router.get('/:id/edit', function(req,res) {
  res.send('tasks id edit GET connected')
})

module.exports = router;
