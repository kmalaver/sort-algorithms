import { focusNode, swap, sleep } from './utils.js';

export async function bubble(arr, nodes, control) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (control.stop) {
        return;
      }
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        const unfocus = focusNode(nodes[j]);
        const unfocus2 = focusNode(nodes[j + 1]);
        await sleep(control.time);
        swap(nodes[j], nodes[j + 1]);

        unfocus();
        unfocus2();
      }
    }
  }
  return arr;
}
