// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color
//  и выводит значение цвета в span.color.
// {/* <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div> */}


const changeColorBtn = document.querySelector('button.change-color');
changeColorBtn.addEventListener('click', handleChangeColorBtn);

function handleChangeColorBtn () {
  const body = document.querySelector('body');
  const spanColorText = document.querySelector('span.color');

  body.style.backgroundColor = getRandomHexColor();
  spanColorText.textContent = getRandomHexColor();
};
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};