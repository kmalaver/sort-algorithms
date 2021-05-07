export const name = 'Bubble Sort';

async function bubble(arr, nodes, control) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (control.stop) return;

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        await control.draw(arr, control.time);
      }
    }
  }
  return arr;
}

export default bubble;
