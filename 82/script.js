async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        },1000);
    })
}

(async function main(){
    let a = await sleep();
    alert(a);
    
    let b = await sleep();
    console.log(b);     
})