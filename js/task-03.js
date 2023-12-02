const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    output.textContent = inputValue ? inputValue:"Anonimus"
} );