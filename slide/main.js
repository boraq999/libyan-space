let list = document.querySelector(".container-logo");
let items = document.querySelectorAll(".logo");
console.log(list);
console.log(items);

document.querySelector(".container-logo").removeChild(items[1]);

list = document.querySelector(".container-logo");
items = document.querySelectorAll(".logo");
console.log(list);
console.log(items);
