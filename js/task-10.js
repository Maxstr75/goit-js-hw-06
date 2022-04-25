// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls input'),
  boxes: document.querySelector('#boxes'),
}

console.log(refs);

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

let size = 30;

function createBoxes(e) {
  const min = +refs.input.getAttribute('min');
  const max = +refs.input.getAttribute('max');

    
  console.log(min);
  const value = +refs.input.value;
  
  const arr = [];
  if (min <= value >= max) {
    for (let i = 0; i < value; i += 1);
    const div = document.createElement('div');
    div.style.width = div.style.height = size + "px";
    size += 10;
    div.style.backgroundColor = getRandomHexColor();
    arr.push(div);
  }
  refs.boxes.append(...arr);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
