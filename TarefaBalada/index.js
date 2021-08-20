const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, '/three/build')))
app.use('/jsm/', express.static(path.join(__dirname, '/three/examples/jsm')))

app.listen(3000, () =>
  console.log('visit http://localhost:3000/')
)