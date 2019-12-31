var express = require('express')

const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const routerV1 = require('./routes/v1/')
app.use('/api/v1/', routerV1)

// // routerにルーティングの動作を書いてく
// app.get('/', function (req, res) {
//   res.json({
//     message: 'Hello,world'
//   })
// })

// routerをモジュールとして扱う準備
module.exports = app
