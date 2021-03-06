// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');



const decrBtn = document.querySelector('#counter').firstElementChild;
const incrBtn = document.querySelector('#counter').lastElementChild;


incrBtn.addEventListener('click', event => {
    // console.log("Добавляю слушателя события на кнопку");
    valueEl += 1;
    counterValue.innerText = valueEl;
    // console.log("counterValue", counterValue);
});

decrBtn.addEventListener('click', event => {
    // console.log("Снимаю слушателя события с кнопки");
    valueEl -= 1;
    counterValue.innerText = valueEl;
    // console.log("counterValue", counterValue);
});

