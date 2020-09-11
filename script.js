let decimal = Number(prompt("What is the decimal number you want to convert?"));
function convertDecimalToBinary(decimal){
let bin = "";
let temp = decimal;
while (temp>0){
    if(temp % 2 == 0){
        bin = "0" + bin;
    }
    else{
        bin = "1" + bin;
    }
    temp = Math.floor(temp / 2);
}
return bin;
}

let hexremainder = decimal%16;

if (hexremainder == 15){
    hexremainder = "F"
} 
if (hexremainder == 14){
    hexremainder = "E"
} 
if (hexremainder == 13){
    hexremainder = "D"
} 
if (hexremainder == 12){
    hexremainder = "C"
} 
if (hexremainder == 11){
    hexremainder = "B"
} 
if (hexremainder == 10){
    hexremainder = "A"
} 
 
console.log(`The binary of ${decimal} is ${convertDecimalToBinary(decimal)}.`)
console.log(`The hexadecimal of ${decimal} is ${hexremainder}.`);
