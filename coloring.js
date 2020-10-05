//create an empty list of elements to color
//walk the tree until generationNum times and add that element to the empty list
//iterate through the list and add the .generation-color class to the element class list

function colorGeneration(generationNum) {
  if (generationNum === 0) return;

  let colorElements = [document.body];

  for (let idx = 0; idx < generationNum; idx += 1) {
    colorElements = colorElements.map(element => [...element.children]).flat();
  }

  colorElements.forEach(element => {
    element.classList.add('generation-color');
  });
}

// colorGeneration(1);
// colorGeneration(4);
colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);