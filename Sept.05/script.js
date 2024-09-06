//Syntax for JavaScript Stuff

//single line comment

console.log("hello world");

let helloWorldVariable = "hello world";
console.log(helloWorldVariable);

const helloWorldConst = "hello world constant";
console.log(helloWorldConst);

helloWorldVariable = 'hello world variable'; //doesnt matter if strings are double quotes or single quotes they should work the same.
console.log(helloWorldVariable);

let stringWithQuotesInside = 'this is a string with "quotes" inside of it'; //switch the double to single quotes for what you need on the inside.

const number = 7;
const stringLiteral = 'this is a string literal, number is :${number + 10}'; //dont know why this isnt working?
const stringConcatenation = 'this is a string concatenation, number + 10 is:' + number + 10; //this prints wrong

console.log(stringLiteral);
console.log(stringConcatenation);

const myArray = ['cats', 'dogs', 'goats'];
console.log(myArray);
console.log(myArray[2]);
console.log(myArray.length);

myArray.push('pigs');
console.log(myArray);

const thisClassroom = {
    building: "ATLAS",
    roomNumber: 104,
    "key-with-dash": 'value-with-dash'
};
console.log(thisClassroom);
console.log(thisClassroom.building);
console.log(thisClassroom["building"]);
console.log(thisClassroom["key-with-dash"]); //dont use brackets and dash notation because it is a pain.

thisClassroom.newProperty = 'new value';
console.log(thisClassroom);

const x = 5;
const y = 7;

if (x + y > 10) {
    console.log("we should reach here!");
} else {
    console.log("this code should never run");
}

let z = 0;
while (z < 10) {
    console.log(z);
    z++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for(const animal of myArray) {
    console.log(animal);
}

const num = 17;

function addTen(num) {
    console.log(num); //not 17
    return num +10;
}

console.log(num); //17

console.log(addTen(5));
console.log(addTen);

function printToConsole(something) {
    console.log(something);
}

myArray.forEach(printToConsole);

const printToConsoleArrowFN = (something) => {
    console.log(something);
}

(() => { console.log("inside anonymous function!")})();

myArray.forEach((animal) => {
    console.log(animal);
});

const firstParagraph = documemnt.getElementById("first=para");
    console.log(firstParagraph);

const myParagraphs = document.getElementsByClassName("my=para");
console.log(myParagraphs);

const googleLink = document.querySelector("#google-link");
googleLink.href = 'https://colorado.edu';

const changeLinkButton = document.querySelector('#change-link-button');
changeLinkButton.addEventListener('click',chaneLink);
// The DOM is the model by which JavaScript interacts with HTML and CSS
// HTML elements/nodes can be obtained either through queries or through tree navigation and 

//Getting Objects with DOM Queries
//document.getElementById("some-id") retrieves the element with the id "some-id"
//document.getElementByClassName("some-class'name") retrieves a list of elements, all which have the class "some-class-name"
//document.querySelector("#some-id") retrieves the element with the id "some-id"
//document.querySelector(".some-class-name") retrieves the first element in the document that has the class "some-class-name"
//document.querySelector