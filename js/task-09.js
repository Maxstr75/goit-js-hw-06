// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color
//  и выводит значение цвета в span.color.
// {/* <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div> */}

const refs = {
    body: document.body,
    btnStart: document.querySelector('button[data-action = "start"]'),
    btnStop: document.querySelector('button[data-action = "stop"]'),
}

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', onBtnStop);

const randomIntegerFromInterval = () => {
  return Math.floor(Math.random() *  16777215);
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}