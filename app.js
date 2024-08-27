const express = require('express')
const app = express()
const port = 30001

app.get('/', (req, res) => {
  res.sendFile('./noood-file/app.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`http://localhost:${port} `)
})