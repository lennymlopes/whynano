window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('.fade')
  let position = window.innerHeight
  for(section of sections) {
    
    if(section.getBoundingClientRect().top / 0.6 < position) {
      section.classList.add('active')
    } 
    else if (section.getBoundingClientRect().top / 0.7 > position) {
      section.classList.remove('active')
    }
  }
})