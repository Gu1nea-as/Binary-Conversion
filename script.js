let decimal = Number(prompt("What is the decimal number you want to convert?")); // brings up a prompt to ask what the user's number is.

bin = ("0000 0000"+decimal.toString(2)).slice(-8); // converts the input into binary and splicing it with 0000 0000

let binary=bin.match(/.{1,4}/g); // searchs for the first 4 characters of bin

hex = decimal.toString(16); // converts the input into hexadecimal

console.log(`The binary of ${decimal} is ${binary.join(' ')}.`)
console.log(`The hexadecimal of ${decimal} is ${hex}.`);
