const app = require('./app/app.js')

const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'

app.listen(port, host)
console.log(`Server listening on http://${host}:${port}`)
