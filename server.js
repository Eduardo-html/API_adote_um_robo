const express = require('express')
const app = express()

app.listen(8000, () => 'Curuzes')

app.get('/', (req, res) => {
  res.send("bração velho")
})