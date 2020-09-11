let decimal = Number(prompt("What is the decimal number you want to convert?")); // brings up a prompt to ask what the user's number is.

bin = ("0000 0000"+decimal.toString(2)).slice(-8);

let binary=bin.match(/.{1,4}/g);

hex = decimal.toString(16);

console.log(`The binary of ${decimal} is ${binary.join(' ')}.`)
console.log(`The hexadecimal of ${decimal} is ${hex}.`);
