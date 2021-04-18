import algorithms, { bubble, selectionSort } from './algorithms.js';
import { generateRandomNumbers, makeNumberNodes, execSort } from './utils.js';

const HEIGHT_DIF = 20;
let numsArr = [];
let time = 50;
let currentAlgorithm = 0;

// dom elements
const container = document.getElementById('bars-container');
const btnSort = document.getElementById('btn-sort');
const btnCancel = document.getElementById('btn-cancel');
const inputLength = document.getElementById('input-length');
const inputTime = document.getElementById('input-time');
const selectAlgorithm = document.getElementById('select-algorithm');

// events
btnSort.addEventListener('click', async () => {
  btnSort.disabled = true;
  inputLength.disabled = true;
  inputTime.disabled = true;
  btnCancel.disabled = false;

  await execSort(
    algorithms[currentAlgorithm].fun,
    numsArr,
    container.childNodes,
    time
  );

  btnSort.disabled = false;
  inputLength.disabled = false;
  inputTime.disabled = false;
  btnCancel.disabled = true;
});

inputLength.addEventListener('change', (e) => {
  container.innerHTML = '';
  numsArr = generateRandomNumbers(parseInt(e.currentTarget.value), HEIGHT_DIF);
  container.append(...makeNumberNodes(numsArr));
});

inputTime.addEventListener('change', (e) => {
  time = parseInt(e.currentTarget.value);
});

selectAlgorithm.addEventListener('change', (e) => {
  currentAlgorithm = parseInt(e.currentTarget.value);
});

function init() {
  inputLength.value = 10;
  inputTime.value = time;
  numsArr = generateRandomNumbers(10, HEIGHT_DIF);
  container.append(...makeNumberNodes(numsArr));

  algorithms.forEach((algorithm, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = algorithm.name;

    selectAlgorithm.appendChild(option);
  });
}

init();
