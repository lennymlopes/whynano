export function lang() {
  
  const languages = {
    "en" : {
      "hero-title": "Why Nano?",
      "hero-subtitle": "Instant. Feeless. Green."
    },
    "de" : {
      "hero-title": "Wieso Nano?",
      "hero-subtitle": "Schnell. Gebührenlos. Grün",
      "s1-title": "Was ist Nano?",
      "s1-p1": "Nano ist <em>digitales Geld.</em>",
      "s1-p2": "Nano ist schnell, gebührenlos und umweltfreundlich"
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
