console.log('Proises');


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a)
    if (a < 0.5) {
        reject("not Supporting!!!")
    }
    else {
        setTimeout(() => {
            console.log('Done!');
            resolve("Sup")
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a)
    if (a < 0.5) {
        reject("not Supporting!!!")
    }
    else {
        setTimeout(() => {
            console.log('Done N!');
            resolve("Sup N..")
        }, 2000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

let p3 = Promise.all([prom1, prom2]).catch((err) => {
    console.log(err);
})