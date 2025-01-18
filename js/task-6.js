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
 if(checkInput()){boxesContainer.append(input) }
});

function checkInput() {
 return input.value !== '' && input.value >= 1 && input.value <= 100;
}

function createBoxes(amount) {
  amount = 
}