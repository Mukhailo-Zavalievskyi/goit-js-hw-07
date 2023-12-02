function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputRef.value;
  if (amount >= 1 && amount <= 100) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      boxes.push(box);
      size += 10;
    }

    boxesRef.append(...boxes);
  } else {
    alert('The value must be between 1 and 100');
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
