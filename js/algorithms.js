const algorithmFiles = ['bubble', 'cycle', 'insertion', 'merge', 'selection'];

async function getAlgorithms() {
  const algorithms = [];

  for (const name of algorithmFiles) {
    const algorithm = await import(`./algorithms/${name}.js`);
    algorithms.push({
      name: algorithm.name || 'Unnamed',
      fun: algorithm.default,
    });
  }

  return algorithms;
}

// const algorithms = [
//   { name: 'Bubble Sort', fun: bubble },
//   { name: 'Selection Sort', fun: selectionSort },
//   { name: 'Insertion Sort', fun: insertionSort },
//   { name: 'Merge Sort', fun: mergeSort },
//   { name: 'Cycle Sort', fun: cycle },
// ];

export default getAlgorithms;
