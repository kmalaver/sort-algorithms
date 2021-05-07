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
    node.className = 'bar';
    node.style.height = `${(number / numbers.length) * 4 + 20}%`;

    nodes.push(node);
  });

  return nodes;
};

export async function swap(node1, node2) {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
}

export async function draw(container, numsArr) {
  container.innerHTML = '';
  const nodes = makeNumberNodes(numsArr);
  console.log(nodes);
  container.append(...nodes);
  await sleep(100);
}

export async function focusNode(time, className, ...nodes) {
  for (const node of nodes) {
    node.classList.add(className);
  }

  await sleep(time);

  for (const node of nodes) {
    node.classList.remove(className);
  }
}
