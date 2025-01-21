function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  if (checkInput()) {
    createBoxes(Number(input.value));
  }
  input.value = '';
});

function checkInput() {
 return input.value !== '' && input.value >= 1 && input.value <= 100;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const boxesArray = []
  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
  }
  boxesContainer.append(...boxesArray);
}

function destroyBoxes() {
   boxesContainer.innerHTML = '';
}

buttonDestroy.addEventListener('click', destroyBoxes);
