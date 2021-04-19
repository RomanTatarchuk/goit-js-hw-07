const createBoxes = (amount) => {
    let boxEl = ''
    for (let i = 1; i <= amount; i += 1) {
        boxEl += '<div></div>';
    };
    return boxEl;
};

function getRandomColor() {
    const color = function () {
         return Math.floor(Math.random()*256) };
    return `rgb(${color()}, ${color()}, ${color()})`;
}

const input = document.querySelector('input');
const renderBtn = document.querySelector('#controls button[data-action="render"]');
const destroyBtn = document.querySelector('#controls button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => {
    boxes.insertAdjacentHTML('beforeend', `${createBoxes(Number(input.value))}`);
    let size = 30;
    const boxArray = boxes.querySelectorAll('div');
    boxArray.forEach(box => {
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        size += 10;
        box.style.backgroundColor = getRandomColor();
    });
});

destroyBtn.addEventListener('click', () => {
    boxes.innerHTML = ''
});