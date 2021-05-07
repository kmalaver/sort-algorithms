import { focusNode, swap, sleep, draw } from './utils.js';

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

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

async function insertionSort(arr, nodes, control) {
  const parent = nodes[0].parentNode;
  const { length } = arr;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
      arr[j] = arr[j - 1];

      await draw(parent, arr);
      j--;
    }

    arr[j] = temp;
    await draw(parent, arr);
  }

  console.log(arr);

  return arr;
}

async function mergeSort(arr, nodes, control) {
  if (arr.length > 1) {
    const { length } = arr;
    const middle = Math.floor(length / 2);
    const left = await mergeSort(arr.slice(0, middle), nodes);
    const right = await mergeSort(arr.slice(middle, length), nodes);
    arr = merge(left, right, compare);
  }

  await draw(nodes[0].parentNode, arr);
  return arr;
}

function merge(left, right, compare) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(
      compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

const algorithms = [
  { name: 'Bubble Sort', fun: bubble },
  { name: 'Selection Sort', fun: selectionSort },
  { name: 'Insertion Sort', fun: insertionSort },
  { name: 'Merge Sort', fun: mergeSort },
];

export default algorithms;
