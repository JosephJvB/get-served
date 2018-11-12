const express = require('express')
const api = express()
const path = require('path')

const staticFilePath = path.join(__dirname, '../static')

// send html and js to browser
api.use(express.static(staticFilePath))
// at any route, render index.html
api.get('*', (req, res) => res.sendFile(path.join(staticFilePath, 'index.html')))

api.listen(3000)
