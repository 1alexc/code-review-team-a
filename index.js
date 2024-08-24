// Ticket 1a
// Ticket 1a: getElementById()
// Instructions:
// Use getElementById() to select the element with the id of "title".
// Log the selected element to the console.
// Expected Outcome:
// The console should display the <h1> element with the content "Intro to the DOM".

let title = document.getElementById('title');
console.log(title);

//Ticket 1b
let content = document.getElementsByClassName('content');
console.log(content);

// Ticket 1c
let list = document.getElementsByTagName('li');
console.log(list);

// Ticket 1d
let highlight = document.querySelector('.highlight');
console.log(highlight);

// Ticket 1e
let highlightAll = document.querySelectorAll('.highlight');
console.log(highlightAll);

//Ticket 2: Traversing the DOM
let listItem = document.querySelector('.list-item')
console.log(listItem.parentNode)

// Ticket 2b
let itemList = document.getElementById('itemList');
let childNodes = itemList.childNodes;
console.log(childNodes);

// Ticket 2c
let children = itemList.children;
console.log(itemList.children);

// Ticket 2d
let firstChild= itemList.firstChild;
let lastChild= itemList.lastChild;

// Ticket 2e
let cherry = children[2];
console.log(cherry);
let next = cherry.nextElementSibling
let previous = cherry.previousElementSibling
console.log(next);
console.log(previous);

// find Cherry and sibling elements dynamically
let liElements2 = document.querySelectorAll('li');
let nextSib;
let prevSib;
// function to check if element is date and remove it
function findCherry(element) {
    if (element.innerHTML === '🍒 Cherry') {
      nextSib = element.nextElementSibling;
      prevSib = element.previousElementSibling;
    }
}
liElements2.forEach(findCherry);
console.log(`Option 2 - dynamically`, nextSib);
console.log(`Option 2 - dynamically`, prevSib);

// Ticket 3a
// Select the <h1> element with the id of "title".
// Change its text color to "red" and font size to "30px" using JavaScript.

let h1Title = document.getElementById('title');
h1Title.style = 'color: red; font-size: 30px;';

// Ticket 3b
let newPara = document.createElement("p");
let newText = document.createTextNode("This is a dynamically added paragraph.")
newPara.appendChild(newText);
document.body.appendChild(newPara);

// Ticket 3c
let firstPara = document.querySelector(".content");
firstPara.textContent = "This paragraph has been updated using js."

//Ticket 3d: Modifying Attributes
let hover = document.querySelectorAll(".content")[1];
hover.title= "hover over me";

//ticket 3e
itemList.classList.add("styled-list")
// itemList[1].classList.remove("list-item")
let bannana = children[1]
bannana.classList.remove("list-item")

//ticket 3f
// select all li tags
let liElements = document.querySelectorAll('li');
// function to check if element is date and remove it
function removeElementIfDate(element) {
    if (element.innerHTML === '🍇 Date') { // would also work with textContent instead of innerHTML
    // other option to check if the word included in the text
    // if(element.innerHTML.includes('Date')){
      element.remove();
    }
  }
// loop through all elements and run the function to check if they are Date & remove them
liElements.forEach(removeElementIfDate);