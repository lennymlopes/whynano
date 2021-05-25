const express = require('express')
const compression = require('compression')
const path = require('path')
const eta = require('eta')
const fs = require('fs')
const mongoose = require('mongoose')

const Request = require('./models/request')

const app = express()
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, './client', 'static')))

app.engine('eta', eta.renderFile)
app.set('view engine', 'eta')
app.set('views', './client/views')

const PORT = process.env.PORT || 5000

const languages = {}
const availableLanguages = []
const d = new Date()

const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PW = process.env.MONGODB_PW
const MONGODB_URL = process.env.MONGODB_URL
const MONGODB_DB = process.env.MONGODB_DB

const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URI, options)

fs.readdir('./languages', (err, filenames) => {
  for (let file of filenames) {
    fs.readFile('./languages/' + file, 'utf-8', (err, content) => {
      let iso = file.split('.')[0]
      content = JSON.parse(content)
      content.settings['iso'] = iso
      languages[iso] = content
      availableLanguages.push({ iso: iso, value: content.settings.value, display_name: content.settings.display_name })
    })
  }
})

app.use((req, res, next) => {
  const cookies = parseCookies(req.headers.cookie)
  const existing = Object.keys(cookies).includes('selectedLanguage') ? "existing user" : "new user"
  console.log(`${req.method} ${req.originalUrl} ${new Date()} ${existing}`) 
  Request.create({path: req.method, time: new Date(), newUser: !Object.keys(cookies).includes('selectedLanguage')})
  next()
})

app.get('/', (req, res) => {
  const userLanguages = req.acceptsLanguages()
  const cookies = parseCookies(req.headers.cookie)
  const selectedLanguage = Object.keys(cookies).includes('selectedLanguage') ? cookies.selectedLanguage : 'en'
  res.render('index', { ...languages[selectedLanguage], availableLanguages })
})

app.get('/sources', (req, res) => {
  res.render('sources')
})



// robots.txt
app.get('/robots.txt', function (req, res) {
  res.type('text/plain')
  res.send('User-agent: *\nDisallow:')
})

app.get('/sitemap.xml', (req, res) => {
  d.setDate(d.getDate() - 1)
  console.log(availableLanguages)
  res.header('Content-Type', 'application/xml')
  res.render('sitemap', { date: d , languages: availableLanguages})
})

app.get('/:lang', (req, res) => {
  let selectedLanguage = req.params.lang
  let available = availableLanguages.map(language => language.iso)
  if(available.includes(selectedLanguage)) {
    res.render('index', { ...languages[selectedLanguage], availableLanguages })
  }
  else {
    res.render('404')
  }
  
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

function parseCookies (raw) {
  if (!raw) {
    return []
  }
  const cookies = {}
  for (cookie of raw.split('; ')) {
    const [key, value] = cookie.split('=')
    cookies[key] = value
  }
  return cookies
}
