document.addEventListener('DOMContentLoaded', event => {
 
  let links = document.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.stopPropagation();
      let href = event.target.getAttribute('href');
      let article = document.querySelector(href);
      setHighlight(article);
    });
  });
  
  let main = document.querySelector('main');
  
  document.addEventListener('click', event => {
    setHighlight(main);
  });
  
  main.addEventListener('click', event => {
    event.preventDefault();
    
    let element = event.target;
    
    if (element.tagName !== "ARTICLE") {
      element = element.parentNode;
    }
    
    if (element.tagName === "ARTICLE") {
      event.stopPropagation();
      setHighlight(element);
    } 
  });
  
  
  function setHighlight(element) {
    clearHighlight();
    element.classList.add('highlight');
  }
  
  function clearHighlight() {
    let currentHighlight = document.querySelector('.highlight');
    if (currentHighlight) {
      currentHighlight.classList.remove('highlight');
    }
  }
});