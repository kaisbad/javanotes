/* console.log("connected"); */
//comments
//variables
//dont do this
var x = 45;

//yes do this
//let when we want variables that can be redefined
let y = 45;
y = 34;
let a; //variable to be defined
//const YES DO THIS, cannot be redefined, use const 99% of time

const z = 45;

//Data Types, primitive data types
/* let string = "Kyle";
let integer = 45; //Number
let bool = true; //true or false
let nulls = null; //null is absence of value
let undefined = undefined; //no value */
//x,y are arguement
/* function add(x, y) {
  //not magic
  return x + y;
  //cannot write after return statement
}
//call functions
const result = add(z, 65);
console.log(result);

//conditional statements
let b = 7;
if (b > 0) {
  console.log("positive number");
} else if (b < 0) {
  console.log("negative number");
} else if (b === 0) {
  console.log("zero");
} else {
  console.log("its zero? maybe who knows");
}
 */

/* console.log("aiohfuhashlasdg");
const header = document.querySelector("h1"); */

/* const DOMSelectors = {
  header: document.querySelector("h1"),
  descriptiom: document.querySelector(".card-desc"),
  items: document.querySelector("li"),
  cardHeader: document.querySelector("cardHeader"),
  form: document.querySelector(".form"),
};
const student = { name: "Mark", age: 16 };

console.log(DOMSelectors.items);
function changeColor() {
  //find element with querySelector
  let button = document.querySelector(".btn");
  //listen for a click even
  console.log(button);
  button.addEventListener("click", function (event) {
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    button.style.backgroundColor = "red";
  });
}
//call functions
changeColor();

const item = document.querySelectorAll("li");
//turn the nodelist into an array
const items = Array.from(item);
//iterate/loop over array and for each element make the color red
items.forEach((el) => (el.style.color = "red"));

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.targer.textContent);
  })
); */

//event listener for form
//get values from form for widget object
//create the card insert the card
//find remove buttons and add event listeners

//gets data
//shows data
async function getData(URL) {
  //fetch returns a promise
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    //guard clause
    if (response.status === 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.name;
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that pocket monster");
  }

  //turned into json
  const data = await response.json();
  console.log(response);
}
getData();
