const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

let counter = Number(counterValue.textContent);

decrementBtn.addEventListener('click', () => {
    counter -= 1;
    return counterValue.textContent = `${counter}`;
});
incrementBtn.addEventListener('click', () => {
    counter += 1;
    return counterValue.textContent = `${counter}`;
});