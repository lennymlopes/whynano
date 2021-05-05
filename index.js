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
  let cookies = parseCookies(req.headers.cookie)
  let selectedLanguage = Object.keys(cookies).includes('selectedLanguage') ? cookies['selectedLanguage'] : 'en'
  let availableLanguages = []
  for(key of Object.keys(languages)) {

    availableLanguages.push({iso: languages[key].iso, value: languages[key].value, display_name: languages[key].display_name })
  }
  console.log(availableLanguages)
  res.render("index", {...languages[selectedLanguage], availableLanguages})
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

function parseCookies(raw) {
  let cookies = {}
  for(cookie of raw.split('; ')) {
    let [key, value] = cookie.split('=')
    cookies[key] = value
  }
  return cookies
}