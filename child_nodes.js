function childNodes(id) {
  let parent = document.getElementById(String(id));
  let directChildren = parent.childNodes.length;
  let indirectChildren = 0;

  for (let idx = 0; idx < directChildren; idx += 1) {
    walkTree(parent.childNodes[idx], node => {
      return indirectChildren += node.childNodes.length;
    });
  }

  return [directChildren, indirectChildren];
}

function walkTree(node, callback) {
  callback(node);

  if (node.childNodes.length > 0) {
    for (let idx = 0; idx < node.childNodes.length; idx += 1) {
      walkTree(node.childNodes[idx], callback);
    }
  }
}

console.log(childNodes(1));
console.log(childNodes(4));
console.log(childNodes(9));
