const prompt = require("prompt-sync")();

let a = Number(prompt("Enter number 1"));
let b = Number(prompt("Enter number 2"));

let random = math.random();

let add = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let expo = a**b;

if (random<0.1) {
    console.log("addition is:", a-b);
    console.log("subtracion is:", a/b);
    console.log("multiplication is:", a+b);
    console.log("division is:", a**b);
} else {
    console.log("addition is:", a+b);
    console.log("subtracion is:", a-b);
    console.log("multiplication is:", a*b);
    console.log("division is:", a**b);
}