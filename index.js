const express = require('express')
const compression = require('compression')
const path = require('path')
const eta = require('eta')
const languages = require('./languages.json')

const app = express()
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, './client', 'static')))

app.engine("eta", eta.renderFile)
app.set("view engine", "eta")
app.set("views", "./client/views")

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  const userLanguages = req.acceptsLanguages()
  res.render("index", languages["de"])
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})