const express = require('express')
const path = require('path')

const app = express()

app.get('/test', (req,res) => {
  // res.send('hi')
  // res.json({name: 'John Doe'})
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(3000)