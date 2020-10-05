function domTreeTracer(id, arr = []) {
  let element = document.getElementById(id);

  if (element !== null) {
    let parentElement = element.parentElement;
    console.log("parent element " + parentElement);
  
    arr.push(getTagNames(parentElement.children));

    if (parentElement.tagName === "BODY") {
      return arr;
    } else {
      return domTreeTracer(parentElement.getAttribute('id'), arr);
    }
  }
  
}

function getTagNames(htmlCollection) {
  return [...htmlCollection].slice(0).map(element => element.tagName);
}

console.log(domTreeTracer(1));
console.log(domTreeTracer(2));
console.log(domTreeTracer(22));