function card(title, cname, views, monthsold, duration, thumbnail){
    let viewnumber
    if (views<1000) {
        viewnumber = views;
        
    }

    else if(views>1000000){
        viewnumber = views/1000000 + "M";

    }

    else{
        viewnumber = views/1000 + "k";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="#1">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewnumber} views . ${monthsold} months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}




function addcard(){
    let a = Math.random();
    console.log(a);
    if (a<=0.5) {
        card("Title", "The Kittler", 560000, 7, "6:06", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQyummWP-F7ezd__TXwuF7GaEyWR_5nvZpw&s")
    } else {
        card("Title 2", "The Kittler 2", 5600000, 2, "26:06", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQyummWP-F7ezd__TXwuF7GaEyWR_5nvZpw&s")
    }


    
}

function removecard(){
    document.querySelector(".card").remove();
}

