let random = Math.random()

let a = prompt("1st number")
let b = prompt("2nd number")
let c = prompt("operation")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

console.log(random)

if(random>0.1){
    alert(`the resul is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c=obj[c]
    alert(`the resul is ${eval(`${a} ${c} ${b}`)}`)
}
