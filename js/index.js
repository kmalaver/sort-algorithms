import getAlgorithms from './algorithms.js';
import { generateRandomNumbers, makeNumberNodes } from './utils.js';
import { draw } from './utils.js';

let algorithms;
const HEIGHT_DIF = 20;
let numsArr = [];
let time = 5;
let currentAlgorithm = 0;

// dom elements
const container = document.getElementById('bars-container');
const btnSort = document.getElementById('btn-sort');
const btnCancel = document.getElementById('btn-cancel');
const btnNewArray = document.getElementById('btn-new-array');
const inputLength = document.getElementById('input-length');
const inputTime = document.getElementById('input-time');
const selectAlgorithm = document.getElementById('select-algorithm');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// events
btnSort.addEventListener('click', async () => {
  btnSort.disabled = true;
  inputLength.disabled = true;
  inputTime.disabled = true;
  btnCancel.disabled = false;
  selectAlgorithm.disabled = true;

  const control = {
    time: time * (1000 / numsArr.length),
    stop: false,
    draw,
  };

  const stop = () => {
    control.stop = true;
  };

  btnCancel.addEventListener('click', stop);

  await algorithms[currentAlgorithm].fun(numsArr, control);

  btnCancel.removeEventListener('click', stop);

  inputLength.disabled = false;
  inputTime.disabled = false;
  btnCancel.disabled = true;
  btnNewArray.disabled = false;
  selectAlgorithm.disabled = false;
});

btnNewArray.addEventListener('click', () => {
  container.innerHTML = '';
  numsArr = generateRandomNumbers(numsArr.length, HEIGHT_DIF);
  container.append(...makeNumberNodes(numsArr));
  btnNewArray.disabled = true;
  btnSort.disabled = false;
});

inputLength.addEventListener('change', (e) => {
  container.innerHTML = '';
  numsArr = generateRandomNumbers(parseInt(e.currentTarget.value), HEIGHT_DIF);
  container.append(...makeNumberNodes(numsArr));
  btnNewArray.disabled = true;
  btnSort.disabled = false;
});

inputTime.addEventListener('change', (e) => {
  time = parseInt(e.currentTarget.value);
});

selectAlgorithm.addEventListener('change', (e) => {
  currentAlgorithm = parseInt(e.currentTarget.value);
});

menuToggle.addEventListener('change', (e) => {
  menu.classList.toggle('active', e.currentTarget.checked);
});

async function init() {
  inputLength.value = 30;
  inputTime.value = time;
  numsArr = generateRandomNumbers(30, HEIGHT_DIF);
  container.append(...makeNumberNodes(numsArr));

  algorithms = await getAlgorithms();

  function genOptions(algorithms) {
    algorithms.forEach((algorithm, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.innerText = algorithm.name;

      selectAlgorithm.appendChild(option);
    });
  }

  genOptions(algorithms);
}

init();
