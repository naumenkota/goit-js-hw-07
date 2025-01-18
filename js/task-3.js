const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener('input', (event) => {
    const valueInput = event.currentTarget.value.trim();
    output.textContent = valueInput === "" ? 'Anonymous' : valueInput;
})