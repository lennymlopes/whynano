const express = require('express')
const compression = require('compression')
const path = require('path')
const eta = require('eta')
const fs = require('fs')

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


fs.readdir('./languages', (err, filenames) => {
  console.log(filenames)
  for (file of filenames) {
    fs.readFile('./languages/' + file, 'utf-8', (err, content) => {
      content = JSON.parse(content)
      languages[content.iso] = content
      availableLanguages.push({ iso: content.iso, value: content.value, display_name: content.display_name })
    })
  }
})

app.get('/', (req, res) => {
  const userLanguages = req.acceptsLanguages()
  const cookies = parseCookies(req.headers.cookie)
  const selectedLanguage = Object.keys(cookies).includes('selectedLanguage') ? cookies.selectedLanguage : 'en'
  res.render('index', { ...languages[selectedLanguage], availableLanguages })
})

// robots.txt
app.get('/robots.txt', function (req, res) {
  res.type('text/plain')
  res.send('User-agent: *\nDisallow:')
})

app.get('/sitemap.xml', (req, res) => {
  d.setDate(d.getDate() - 1)
  res.header('Content-Type', 'application/xml')
  res.render('sitemap', { date: d })
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
