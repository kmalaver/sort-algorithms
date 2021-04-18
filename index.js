import { bubble } from './algorithms.js';

const HEIGHT_DIF = 20;

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
const rand = generateRandomNumbers(10);

app.append(...makeNumberNodes(rand));

const nodes = app.childNodes;

bubble(rand, nodes);
