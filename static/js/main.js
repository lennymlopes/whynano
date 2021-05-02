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

window.addEventListener('scroll', () => {
  let graphs = document.querySelectorAll('.bar')
  let position = window.innerHeight
  for(graph of graphs) {
    
    if(graph.getBoundingClientRect().bottom / 0.9 < position) {
      graph.classList.add('active')
      // graph.innerHeight = "50rem"
    } 
    else if (graph.getBoundingClientRect().top / 0.7 > position) {
      graph.classList.remove('active')
    }
  }
})