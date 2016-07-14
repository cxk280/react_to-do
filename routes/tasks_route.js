const router = require('express').Router();

router.get('/', function(req,res) {
  res.send('view task list')
})

router.post('/', function(req,res) {
  res.send('posting to task list')
})

router.get('/:id', function(req,res) {
  res.send(`view task ${req.params.id}`)
})

router.put('/:id', function(req,res) {
  res.send(`edited task ${req.params.id}`)
})

router.delete('/:id', function(req,res) {
  res.send(`deleted task ${req.params.id}`)
})

module.exports = router;
