import { focusNode, swap, sleep } from './utils.js';

export async function bubble(arr, nodes, control) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (control.stop) {
        return;
      }

      await focusNode(control.time, 'focused', nodes[j], nodes[j + 1]);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap(nodes[j], nodes[j + 1]);
        await focusNode(control.time, 'swap', nodes[j], nodes[j + 1]);
      }
    }
  }
  return arr;
}

export async function selectionSort(A, nodes, control) {
  let len = A.length;
  for (let i = 0; i < len - 1; i = i + 1) {
    let j_min = i;
    for (let j = i + 1; j < len; j = j + 1) {
      if (control.stop) {
        return;
      }
      await focusNode(control.time, 'focused', nodes[i], nodes[j]);
      if (A[j] < A[j_min]) {
        j_min = j;
      }
    }
    if (j_min !== i) {
      let temp = A[i];
      A[i] = A[j_min];
      A[j_min] = temp;

      swap(nodes[i], nodes[j_min]);
      await focusNode(control.time, 'swap', nodes[i], nodes[j_min]);
    }
  }
}

const algorithms = [
  { name: 'Bubble Sort', fun: bubble },
  { name: 'Selection Sort', fun: selectionSort },
];

export default algorithms;
