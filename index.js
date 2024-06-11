const e = require('express')
const express = require('express')

const app = express()

app.get('/hello/:username', (req, res) => {
  console.log(typeof req.params.username)
  console.log(req.query.name)
  console.log(req.query.age)
  res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
  res.send(`${x} + ${y} = ${x + y}`)
})

app.get('/users/:username/photo', (req, res) => {
  if (req.params.username === 'Alex') {
    return res.sendFile(`${__dirname}/static/miarchivo.jpg`)
  }
  res.send('No access to this file')
})

app.get('/name/:name/age/:age', (req, res) => {
  console.log(req.params)
  res.send(`Hello ${req.params.name} you are ${req.params.age} years old`)
})

app.get('/search', (req, res) => {
  console.log(req.query)
  if (req.query.q === 'javascript books') {
    return res.send('Js books')
  }
  res.send('Normal page')
})

app.all('/info', (req, res) => {
  res.send('Server is running')
})

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`)
})
