// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)

//         }, 3500);
//     })
// }
async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data = await x.json()
    console.log(data);
    return 455;
}
async function main() {
    console.log('Loading Modules');

    console.log('Soething Else');

    console.log('Load Data');

    let data = await getData()

    // data.then((v)=>{
    //     console.log(data);

    //     console.log('Process Data');

    //     console.log('Task 2');
    // })



    console.log(data);

    console.log('Process Data');

    console.log('Task 2');

}

main()

// Example of POST Request
// async function postData(url = "", data = {}){
//     const response = await fetch(url,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     return response.json();
// }

// postData("https://example.com/answer",{answer:42}).then((data)=>{
//     console.log(data);
// });