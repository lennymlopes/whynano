export function lang() {
  
  const languages = {
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

  const userLanguage = navigator.language.split("-")[0]
  if(userLanguage !== "en") {
    setLanguage(userLanguage)
  }

function setLanguage(userLanguage) {
  if(userLanguage in languages){
    let language = languages[userLanguage]
    for( let entry of Object.keys(language)) {
      let element = document.getElementById(entry)
      element.innerHTML = language[entry]
    }
  }
}

}
