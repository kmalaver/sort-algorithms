const colors = {
  DEFAULT: '#1abc9c',
  FOCUSED: '#f1c40f',
  SWAP: '#e74c3c',
};

export function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export const generateRandomNumbers = (length, diff = 1, min = 0) => {
  const numbers = [];
  for (let i = min; i < length + min; i++) {
    numbers.push(i * diff);
  }

  numbers.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return numbers;
};

export const makeNumberNodes = (numbers) => {
  const nodes = [];

  numbers.forEach((number) => {
    const node = document.createElement('div');
    node.className = `bar`;
    node.style.height = `${(number / numbers.length) * 4 + 20}%`;

    nodes.push(node);
  });

  return nodes;
};

export async function draw(numsArr, time) {
  const container = document.getElementById('bars-container');
  const nodes = makeNumberNodes(numsArr);
  container.innerHTML = '';
  container.append(...nodes);
  await sleep(time);
}
