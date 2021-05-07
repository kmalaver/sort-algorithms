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

export const name = 'Insertion Sort';

async function insertionSort(arr, control) {
  const { length } = arr;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
      if (control.stop) {
        return;
      }

      arr[j] = arr[j - 1];

      await control.draw(arr, control.time);
      j--;
    }

    arr[j] = temp;
    await control.draw(arr, control.time);
  }

  return arr;
}
export default insertionSort;
