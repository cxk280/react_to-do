const router = require('express').Router();

router.get('/', function(req,res) {
  res.send('home GET connected')
})

module.exports = router;
