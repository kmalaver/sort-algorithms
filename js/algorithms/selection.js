export const name = 'Bubble Sort';

async function selectionSort(arr, nodes, control) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i = i + 1) {
    let j_min = i;
    for (let j = i + 1; j < len; j = j + 1) {
      if (control.stop) return;

      if (arr[j] < arr[j_min]) {
        j_min = j;
      }
    }
    if (j_min !== i) {
      let temp = arr[i];
      arr[i] = arr[j_min];
      arr[j_min] = temp;
      await draw(arr, control.time);
    }
  }
}

export default selectionSort;
