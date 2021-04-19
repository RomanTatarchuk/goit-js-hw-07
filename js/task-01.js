/*const listCategories = document.querySelector('#categories');

console.log(`В списке ${listCategories.children.length} категории.`);

const listItems = document.querySelectorAll('.item');

const getInfo = list => {
  return list.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${item.querySelectorAll('li').length}`,
    );
  });
};

getInfo(listItems);*/
const listCategories = document.querySelector('#categories')
const listItems = listCategories.querySelectorAll('.item');
//const headingEl = listRef.querySelectorAll('h2');

console.log(`В списке ${listCategories.children.length} категории.`); 


listItems.forEach(elem => {
    console.log(`Категория: ${elem.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`);
});