const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const idEl = document.querySelector('#ingredients');
// console.log(idEl);

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;

const idEl = document.querySelector('#ingredients');
console.log(idEl);

const elements = ingredients.map(options => {
  const ingredientEl = createElement('li');
  ingredientEl.textContent = 'option';
  idEl.append(elements);
});