const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('h1'),
    nameLabel: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const name = event.currentTarget.value;
    refs.nameLabel.textContent = name;
}