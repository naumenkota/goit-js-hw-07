const ulItem = document.querySelector("ul#categories");
const liItem = ulItem.querySelectorAll("li.item");
const numberLi = liItem.length;
console.log(`Number of categories: ${numberLi}`);
liItem.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const numberOfItems = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`)
     console.log( `Elements: ${numberOfItems}`);
})