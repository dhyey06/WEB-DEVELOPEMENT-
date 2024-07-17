const addItem = async (item)=>{
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

const randomdelay = ()=>{
    return new Promise((resolve,reect)=>{
        timeout = 1 + 4*Math.random()
        console.log(timeout);
        setTimeout(()=>{
            resolve()
        },timeout*1000);
        
    })
}

async function main(){

    let t = setInterval(()=>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,-3);
        }
        else{
            last.innerHTML = last.innerHTML + ".";
        }
    },100);
    
    let text = ["Initialized Hacking now Reading Your Data",
        "Reading Your Files",
        "Password Files Detected",
        "Sending All Passwords And Personal Files To Server",
        "Cleaning Up",
        "Got You Lil Nigga"]
        for (const item of text) {
            await addItem(item)
        }

        await randomdelay()
        clearInterval(t)
    }
    main()