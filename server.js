const express = require('express')
const app = express()
const veja = require('./src/routes/routes')

veja(app)
app.listen(8000, () => console.log("Foi!"))

