import { swap } from './swap.js';

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}

export async function bubble(arr, nodes) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // this was missing
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        await sleep();
        swap(nodes[j], nodes[j + 1]);
      }
    }
  }
  return arr;
}

// arr.forEach(async (_, i) => {
//   arr.slice(0, len - i - 1).forEach(async (_, j) => {
//     if (arr[j] > arr[j + 1]) {
//       // swap
//       let temp = arr[j];

//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       await sleep(() => {
//         swap(nodes[j], nodes[j + 1]);
//       });
//     }
//   });
// });
