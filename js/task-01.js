// const itemArray = document.querySelectorAll('.item');
// console.log(`Number of categories: ${itemArray.length}`);
// console.log('');

// const subListArray = [...itemArray].map(element => {
//     const titleOfCategory = element.firstElementChild.textContent;
//     console.log(`Category: ${titleOfCategory}`);
    
//     const subListCategory = element.lastElementChild;

//     const subCategoryCount = subListCategory.querySelectorAll('li');
//     console.log(`Elements: ${subCategoryCount.length}`);
//     console.log('');
// });


function countCategory () {
    const itemArray = document.querySelectorAll('.item');
    console.log(`Number of categories: ${itemArray.length}`);
    console.log('');

    const subListArray = [...itemArray].map(element => {
    const titleOfCategory = element.firstElementChild.textContent;
    console.log(`Category: ${titleOfCategory}`);
    
    const subListCategory = element.lastElementChild;

    const subCategoryCount = subListCategory.querySelectorAll('li');
    console.log(`Elements: ${subCategoryCount.length}`);
    console.log('');
});    
}
countCategory();