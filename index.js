import { bubble } from './algorithms.js';

const HEIGHT_DIF = 20;
let numsArr = [];

const generateRandomNumbers = (length, min = 0) => {
  const numbers = [];

  for (let i = min; i < length + min; i++) {
    numbers.push(i * HEIGHT_DIF);
  }

  numbers.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return numbers;
};

const makeNumberNodes = (numbers) => {
  const nodes = [];

  numbers.forEach((number) => {
    const node = document.createElement('div');
    node.className = 'bar';
    node.style.height = `${number + 10}px`;

    nodes.push(node);
  });

  return nodes;
};

const app = document.getElementById('app');
numsArr = generateRandomNumbers(10);

app.append(...makeNumberNodes(numsArr));

document.getElementById('sortBtn').addEventListener('click', () => {
  bubble(numsArr, app.childNodes);
});

document.getElementById('length').addEventListener('change', (e) => {
  app.innerHTML = '';

  const length = parseInt(e.currentTarget.value);
  numsArr = generateRandomNumbers(length);
  app.append(...makeNumberNodes(numsArr));
});
