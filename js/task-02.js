const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const idEl = document.querySelector('#ingredients');
console.log(idEl);


const elements = ingredients.map(options => {
  const ingredientEl = createElement('li');
  ingredientEl.textContent = 'option';
  idEl.append(...elements);
});