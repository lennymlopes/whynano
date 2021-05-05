const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, './client', 'static')))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  const userLanguages = req.acceptsLanguages()
  res.sendFile(path.join(__dirname, './client', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})