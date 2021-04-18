import { bubble } from './algorithms.js';
import { generateRandomNumbers, makeNumberNodes, execSort } from './utils.js';

const HEIGHT_DIF = 20;
let numsArr = [];
let time = 50;

// dom elements
const container = document.getElementById('bars-container');
const btnSort = document.getElementById('btn-sort');
const btnCancel = document.getElementById('btn-cancel');
const inputLength = document.getElementById('input-length');
const inputTime = document.getElementById('input-time');

// events
btnSort.addEventListener('click', async () => {
  btnSort.disabled = true;
  inputLength.disabled = true;
  inputTime.disabled = true;
  btnCancel.disabled = false;

  await execSort(bubble, numsArr, container.childNodes, time);

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

function init() {
  inputLength.value = 10;
  inputTime.value = time;
  numsArr = generateRandomNumbers(10, HEIGHT_DIF);
  container.append(...makeNumberNodes(numsArr));
}

init();
