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
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = options;
  ingredientEl.classList.add('item');
  return ingredientEl;
});
idEl.append(...elements);