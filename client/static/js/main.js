if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.fade')
  const position = window.innerHeight
  for (section of sections) {
    if (section.getBoundingClientRect().top / 0.7 < position) {
      section.classList.add('active')
    } else if (section.getBoundingClientRect().top / 0.5 > position) {
      section.classList.remove('active')
    }
  }
})

const aboutButton = document.querySelector('#about-button')
const aboutSection = document.querySelector('#about-section')
aboutSection.classList.add('hidden')
aboutButton.addEventListener('click', () => {
  aboutSection.classList.toggle('hidden')
})

function setCookie (name, value) {
  const YEAR = 60 * 60 * 24 * 365
  document.cookie = `${name}=${value}; max-age=${YEAR}; path=/`
}

const languagePicker = document.querySelector('#language-picker-select')
languagePicker.addEventListener('change', () => {
  const selectedLanguage = languagePicker.selectedOptions[0].getAttribute('lang')
  setCookie('selectedLanguage', selectedLanguage)
  window.location = "/"
  
})
