window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section')
  let position = window.innerHeight
  for(section of sections) {
    
    if(section.getBoundingClientRect().bottom / 0.9 < position) {
      section.classList.add('active')
    } else {
      section.classList.remove('active')
    }
  }
})