const sampleText = `This sample test 

contain lots of 
new lines 
and spaces 
with special 
charater`;

// remove new line, spaces, special character from text and return length of text 
console.log(`Text length `, sampleText.length);
const regex = /\s/g;

console.log(`Text length after apply regex ${sampleText.split(regex).join("").length}`);