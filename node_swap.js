//input - two ids for node elements
//output - either a swap of the two nodes in the DOM or undefined if not a valid swap

//algorithm
//get elements from input ids
//check if one element is the child of another, if so return undefined
//replace nodes with the other node

function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (!node1 || !node2) return undefined;
  if (node1.contains(node2) || node2.contains(node1)) return undefined;

  let clone1 = node1.cloneNode(true);
  let clone2 = node2.cloneNode(true);
  let parent1 = node1.parentNode;
  let parent2 = node2.parentNode;

  parent1.replaceChild(clone2, node1);
  parent2.replaceChild(clone1, node2);
  return true;

}

// at least one of the id attributes doesn't exist
// nodeSwap(1, 20);
//  = undefined

// at least one of the nodes is a "child" of the other
// console.log(nodeSwap(1, 4));
// = undefined
// nodeSwap(9, 3);
// = undefined

// one swap
nodeSwap(1, 2);