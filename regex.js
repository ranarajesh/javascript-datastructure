const sampleText = `This sample test 

contain lots of 
new lines 
and spaces 
with special 
charater`;

// remove new line, spaces, special character from text and return length of text 
console.log(`Text length `, sampleText.length);
var regex = /\s/g;

console.log(`Text length after apply regex ${sampleText.split(regex).join("").length}`);

var str = "Hello, world 123!";

var regex = /[a-zA-Z0-9]/g; // only count letters and numbers

console.log(str.match(regex).length); // prints 13 to the console


var str = "Hello, world 123!";

var regex = /[^a-z]/gi; // only count letters

console.log(str.replace(/[^a-z]/gi, "").length); // prints 10 to the consolex

let count =0;
Array.prototype.forEach.call( sampleText, i => ++count)
console.log(count);