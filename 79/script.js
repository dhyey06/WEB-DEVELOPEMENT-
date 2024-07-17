let a = prompt("Enter First Number");

let b = prompt("Enter Second Number");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Enter Number");
}
let sum = parseInt(a)+parseInt(b);
if(isNaN(sum)){
    throw SyntaxError("Enter In Number");
}

function main(){
    let f = 1;
    try {
        console.log("Sum is",sum*f);
        
    } catch (error) {
        console.log("Error Hai Bhai");
    }
    
    finally{
        console.log("Cleaning Up!!!");
    }
}