export const name = 'Merge Sort';

async function mergeSort(arr, control) {
  if (arr.length > 1) {
    const { length } = arr;
    const middle = Math.floor(length / 2);
    const left = await mergeSort(arr.slice(0, middle));
    const right = await mergeSort(arr.slice(middle, length));
    arr = merge(left, right, compare);
  }
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

export default mergeSort;
