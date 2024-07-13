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
    card("Title", "The Kittler", 560000, 7, "6:06", "https://i.ytimg.com/vi/AkCV9JRuEcg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCj2Bpa-4u8D7HdSNXbfmAtTn5mfQ")
}

function removecard(){
    document.querySelector(".card").remove();
}