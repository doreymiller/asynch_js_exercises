// It's similar to slice but different in the sense that slice isn't inclusive on the right hand side.
// The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
// Only consider element nodes.
// Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
// If the id attribute of the start or end index is not in the DOM, return undefined.
// If the slice is not feasible — there's no path connecting the element at the starting index to the ending index — return undefined.

//create an empty array
//set nextId variable to the first argument id
//get element from first argument id
//check if element is child of BODY, if not return undefined
//check if endChild is a child of parent element, if not return undefined
//loop until nextId is the endChildId
//get element for  
function sliceTree(parentId, endChildId) {
  let slice = [];
  let stillSlicing = true;
  
  if (!(isValidSlice(parentId, endChildId))) return undefined;

  let nextElement = document.getElementById(endChildId);

  do {
    if (nextElement.getAttribute('id') === String(parentId)) stillSlicing = false;
    slice.unshift(nextElement.tagName);
    nextElement = nextElement.parentElement;
  } while (stillSlicing);

  return slice;
}

function isValidSlice(parentId, endChildId) {
  let nextElement = document.getElementById(endChildId);
  let sliceParent = document.getElementById(parentId);

  if ((nextElement === null || sliceParent === null)) return false;
  
  if ((!(isAncestor(document.body, sliceParent))) ||
      (!(isAncestor(sliceParent, nextElement)))) {
    return false;
  }

  return true;
}

function isAncestor(ancestor, child) {
  let parent = child.parentElement;
  let valid = false;
  // console.log("isAncestor", parent, parent === ancestor);

  do {
    if (parent === ancestor) {
      valid = true;
      break;
    }

    parent = parent.parentElement;
  } while (parent !== null);

  return valid;
}

console.log(sliceTree(1, 4));
// = ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
// = undefined
console.log(sliceTree(2, 5));
// = undefined
console.log(sliceTree(5, 4));
// = undefined
console.log(sliceTree(1, 23));
// = ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
// = ["SECTION", "P", "SPAN", "STRONG", "A"]