const refs = {
  inputRef: document.getElementById('validation-input'),
  dataLength: document.querySelector('[data-length="6"]'),
};

refs.inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length === +refs.dataLength.dataset.length) {
    refs.inputRef.classList.remove('invalid');
    refs.inputRef.classList.add('valid');
  }
  if (event.currentTarget.value.length !== +refs.dataLength.dataset.length) {
    refs.inputRef.classList.add('invalid');
  }
}