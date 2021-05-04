export function lang() {
  const userLang = navigator.language.split("-")[0]
  const langs = {
    "en" : {
      "hero-title": "Why Nano?",
      "hero-subtitle": "Instant. Feeless. Green."
    },
    "de" : {
      "hero-title": "Wieso Nano?",
      "hero-subtitle": "Schnell. Gebührenlos. Grün",
      "future-title": "Die Zukunft täglicher Transaktionen",
      "future-p1": "Nano is <em>dezentralisiertes, umweltfreundliches und sicheres digitales Geld</em> mit dem Fokus Ineffizienzen in existierenden Finanzsystemen zu eliminieren."
    }
  }
  console.log(userLang)
  console.log(langs)
  
  if(userLang !== "en") {
    if(userLang in langs){
      let lang = langs[userLang]
      // console.log(langs[lang])
      for( let entry of Object.keys(lang)) {
        let element = document.getElementById(entry)
        element.innerHTML = lang[entry]
      }
    }
  }
}
