// let obj ={
//     a:1,
//     b:"Yo!!",

// }
// console.log(obj);
// let animal = {
//     eats:true
// };
// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ = animal;


class animal{
    constructor(name){
        this.name = name;
        console.log('Object Created...');            
    }

    eats(){
        console.log('Kha Rha Hoon...');      
    }

    jups(){
        console.log('Kuud Rha Hoon...');      
    }
}

class lion extends animal{
    constructor(name){
        super(name);
        console.log('Object Created And He Is A Sheeeeeer....');            
    }
}

let a = new animal("Bunny");
console.log(a);


let l = new lion("Sheeeeeer....");
console.log(l);
