 
const categoriesList = document.querySelector('#categories');

categoriesList.classList.add('js-my-categories')


const uls = categoriesList.querySelectorAll('ul');  
for (let i = 0; i < uls.length; i++) {
    uls[i].classList.add('js-categories-list');
}

const jsItem = categoriesList.querySelectorAll('ul > li');
for (let i = 0; i < jsItem.length; i++) {
    jsItem[i].classList.add('js-item');
}

const titleCategories = categoriesList.querySelectorAll('h2');  
for (let i = 0; i < titleCategories.length; i++) {
    titleCategories[i].classList.add('js-title-categories');
}

const listItems = categoriesList.querySelectorAll('ul > li > ul > li');  
for (let i = 0; i < listItems.length; i++) {  
    listItems[i].classList.add('js-categorues-list-items'); 
} 

const categories = categoriesList.querySelectorAll('.item');  
console.log(`Numder of categories: ${categories.length}`);  
 
categories.forEach(category => {  
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul li').length;
    console.log(`Categories: ${title}, Elements: ${itemsCount}`);  
});  

