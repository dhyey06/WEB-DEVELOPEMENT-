// setTimeout(() => {
//     console.log("hey!!");
// }, 2000);

// console.log("wassup,");



const callback = (arg) => {
  console.log(arg);
}

const loadscript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Hey!!")
    document.head.appendChild(sc);
}


loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)