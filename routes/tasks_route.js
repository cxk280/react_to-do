const router = require('express').Router();

let taskData = [];

// function addToTaskData(req,res,next) {
//   taskData.push(req);
//   next();
// }

router.get('/', function(req,res) {
  res.send('view task list')
})

router.post('/', function(req,res) {
  //pushes data into taskData
  res.send(taskData)
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
