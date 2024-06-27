let boxes = document.getElementsByClassName("box")
console.log(boxes)

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`
}

function changeColors() {
  Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
  })
}

// Call the changeColors function when the button is clicked
document.getElementById("myButton").addEventListener("click", changeColors);