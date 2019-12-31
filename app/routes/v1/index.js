const router = require('express').Router()

// GET  http://localhost:3000/api/v1/article/test
router.get('/', function (req, res) {
  res.json({
    success: true,
    message: 'This is api'
  })
})

// routerをモジュールとして扱う準備
module.exports = router
