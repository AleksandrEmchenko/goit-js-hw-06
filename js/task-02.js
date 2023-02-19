const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function createList (products) {
  return [...products].map(product => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = product;
    
    return listItem;
  });
  
}

const listItems = createList(ingredients);

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...listItems);
// console.log(ingredientsList);