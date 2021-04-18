import { focusNode, swap } from './swap.js';

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
}

export async function bubble(arr, nodes) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        const unfocus = focusNode(nodes[j]);
        const unfocus2 = focusNode(nodes[j + 1]);
        await sleep();
        swap(nodes[j], nodes[j + 1]);

        unfocus();
        unfocus2();
      }
    }
  }
  return arr;
}
