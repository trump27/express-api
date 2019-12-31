const env = require('./env')
const app = require('./app/app.js')

const port = process.env.PORT || env.PORT
const host = process.env.HOST || env.HOST

app.listen(port, host)
console.log(`Server listening on http://${host}:${port}`)
