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
    node.style.height = `${number + 10}px`;

    nodes.push(node);
  });

  return nodes;
};

export function swap(node1, node2) {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
}

export function focusNode(node) {
  node.classList.add('focused');

  return () => {
    node.classList.remove('focused');
  };
}

export function finishNode(node) {
  node.classList.add('finish');
}

export async function execSort(algorithm, arr, nodes, time) {
  const control = {
    time,
    stop: false,
  };

  // setTimeout(() => {
  //   control.stop = true;
  // }, 1000);

  await algorithm(arr, nodes, control);
}
