var express = require('express')

const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/', require('./routes/v1/'))

module.exports = app
