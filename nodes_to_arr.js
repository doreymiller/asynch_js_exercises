//create empty array
//if current node is undefined, set current node to body
//add current node tag name to array, followed by empty array

function nodesToArr(arr = [], currentNode){
  if (currentNode === undefined) currentNode = document.body;

  arr.push(currentNode.tagName);
  let childrenArr = [];
  arr.push(childrenArr);

  if (currentNode.children.length > 0) {
    [...currentNode.children].forEach(child => {
      let childArr = [];
      childrenArr.push(childArr);
      nodesToArr(childArr, child);
    });
  }

  return arr;
}

console.log(nodesToArr());
// = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// OR

// = ["BODY", [
    // ["HEADER", []],
    // ["MAIN", []],
    // ["FOOTER", []]]]