// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl= document.querySelector('#name-input');
const outputEl= document.querySelector('#name-output');
inputEl.addEventListener('input', getNewName);
// function getNewName() {
//     if (inputEl.value.trim() === '') {
//         outputEl.textContent = 'Anonymous';
//     } else {
//         outputEl.textContent = inputEl.value;
//     };
// };

function getNewName(event) {
  const value = event.target.value.trim();
  return (outputEl.textContent = !value ? 'Anonymous' : value);
};