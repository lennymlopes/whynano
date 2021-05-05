export function lang() {
  
  const languages = {
    "en" : {
      "hero-title": "Why Nano?",
      "hero-subtitle": "Instant. Feeless. Green."
    },
    "de" : {
      "hero-title": "Wieso Nano?",
      "hero-subtitle": "Schnell. Gebührenlos. Grün",
      "what-title": "Was ist Nano?",
      "what-p1": "Nano ist <em>digitales Geld.</em>",
      "what-p2": "Nano ist <em>schnell, gebührenlos und umweltfreundlich.</em>",
      "what-p3": "Nano ermöglicht ein intuitives Erlebnis, das sich anfühlt, wie es sich für eine digitale Währung gehört - <em>simpel, schnell und <i>einfach richtig.</i></em>",
      "benefit-title": "Was habe ich davon?",
      "benefit-p1": "Als Nutzer kannst du <em>Freunden und Familie auf der ganzen Welt Geld senden,</em> augenblicklich, ohne dass jemand anderes beteiligt ist oder einen Anteil nimmt! Oder unterstütze einen guten Zweck direkt, überall auf der Welt und ohne Zwischenhändler!",
      "benefit-p2": "Als Geschäft können Sie Ihren Kunden ein nahtloses, einfaches und schnelles Zahlungserlebnis bieten und gleichzeitig <em>Kartengebühren sparen und Infrastrukturkosten senken!</em>",
      "amount-title": "Wie viel Nano gibt es?",
      "amount-p1": "Nur <em>133 Millionen Nano</em> werden jemals existieren, und alle sind bereits im Umlauf. Das bedeutet <em>keine monetäre Inflation. Niemals.</em>",
      "compare-title": "Wie sieht es im Vergleich aus?",
      "compare-g1-t": "Bitcoin ist <span class='bitcoin-orange'>langsam.</span> Nano ist <em>schnell.</em>",
      "compare-g1-p": "Die durchschnittliche Bitcoin-Transaktion benötigt 30 Minuten zur Bestätigung, Nano-Transaktionen werden im Durchschnitt in weniger als einer Sekunde bestätigt.",
      "compare-g2-t": "Bitcoin ist <span class='bitcoin-orange'>teuer.</span> Nano ist <em>kostenlos.</em>",
      "compare-g2-p": "Bitcoin-Transaktionen kosten im Durchschnitt $22, Nano-Transaktionen sind gebührenfrei.",
      "compare-g3-t": "Bitcoin ist <span class='bitcoin-orange'>schrecklich für die Umwelt.</span> Nano ist <em>umweltfreundlich.</em>",
      "compare-g3-p": "Das Bitcoin-Netzwerk verbraucht so viel Strom wie ganz Argentinien. Nano kann sein gesamtes Netzwerk mit einer einzigen Windturbine betreiben.",
      "community-title": "Gibt es eine Community?",
      "community-p1": "Ja, und es ist eine der aktivsten, freundlichsten und hilfreichsten Communities aller Kryptowährungen!",
      "community-s1": "Egal ob du Entwickler, Enthusiast, Unternehmer bist oder einfach nur ein paar Fragen hast! Komm und sag Hallo auf ",
      "community-s2": "oder dem",
      "community-forum": "offiziellen Forum!",
      "community-p2": "Du wirst mit offenen Armen empfangen werden!",
      "next-title": "Was nun?",
      "next-s1": "Probiers aus! Lade das",
      "next-natrium": "Natrium Wallet",
      "next-s2": "herunter und hol dir",
      "next-faucet": "gratis Nano!",
      "next-s3": "Installiere",
      "next-s4": "um mehr gratis Nano auf der ganzen Welt zu finden. Erfahre mehr bei der",
      "next-nano-foundation": "Nano-Stiftung.",
      "next-p1": "Beginnen Sie Ihre Reise in die grenzenlose Welt des dezentralisierten, digitalen Geldes.",
      "about-button": "Über diese Seite",
      "about-s1": "Erstellt von",
      "about-p1": "Unterstütze dieses und ähnliche Projekte:"
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