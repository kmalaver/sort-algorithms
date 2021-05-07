const algorithmFiles = ['bubble', 'cycle', 'insertion', 'selection'];

async function getAlgorithms() {
  const algorithms = [];

  for (const name of algorithmFiles) {
    const algorithm = await import(`./algorithms/${name}.js`);
    algorithms.push({
      name: algorithm.name || 'Nameless sort',
      fun: algorithm.default,
    });
  }

  return algorithms;
}

export default getAlgorithms;
