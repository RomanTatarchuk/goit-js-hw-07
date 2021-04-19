const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

const listItems = ingredients.map(ingredient =>{
    const listItem = document.createElement('li');
    listItem.textContent =`${ingredient}`;
    return listItem;
});

listIngredients.append(...listItems);

