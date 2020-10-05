// Nested array of nodes
// const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];


function arrayToNodes(nestedArr, parentNode, rootNode) {
  let nextElement = document.createElement(nestedArr[0]);
  rootNode = rootNode || nextElement;

  if (rootNode !== nextElement) parentNode.appendChild(nextElement);

  let childArr = nestedArr.slice(1)[0];

  if (childArr.length > 0) {
    for (let idx = 0; idx < childArr.length; idx += 1) {
      arrayToNodes(childArr[idx], nextElement, rootNode);
    }
  } else {
    return;
  }

  return rootNode;
}

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

console.log("FINAL OUTPUT", arrayToNodes(nodes));