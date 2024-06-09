const express = require('express')

const app = express()

app.use(express.text())
app.use(express.json())

app.post('/user', (req, res) => {
  res.status(201).send('User created')
  console.log(req.body);
})

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`)
})
