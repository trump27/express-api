const router = require('express').Router()

// GET  http://localhost:3000/api/v1
router.get('/', function (req, res) {
  res.json({
    success: true,
    message: 'This is api'
  })
  console.log('success:', true)
})

module.exports = router
