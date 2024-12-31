// Actions taken when clicking the 'input-area'
const inputPin = document.getElementById('inputPin');
const confirmButton = document.getElementById('confirmButton');

// Escuchar el evento 'input' en el campo de texto
inputPin.addEventListener('input', () => {
  if (inputPin.value.trim() !== '') {
    confirmButton.classList.remove('disabled');
  } else {
    confirmButton.classList.add('disabled');
  }
});