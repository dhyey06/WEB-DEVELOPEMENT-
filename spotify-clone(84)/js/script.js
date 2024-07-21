console.log('Chalo For Javascript!!!');


let currentsong = new Audio();
let songs;
let currFolder;
let play = document.querySelector("#play"); // or whatever the class or id of your play button is
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");

let currentIndex = 0;

function secondstominutes(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingseconds = Math.floor(seconds % 60);

    const formattedminutes = String(minutes).padStart(2, '0');
    const formattedseconds = String(remainingseconds).padStart(2, '0');

    return `${formattedminutes}:${formattedseconds}`
}

async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`/${currFolder}/`);
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${currFolder}/`)[1])

        }
    }

    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    songul.innerHTML = "";
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li>
                            <img src="img/music.svg" alt="">                            
                            <div class="info">${song.replaceAll("%20", " ")}</div>                            
                            <img src="img/play.svg" alt=""></li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").innerHTML.trim())
        })
    })

    return songs;
}

const playMusic = (track, pause = false) => {
    // let audio = new Audio(`/${currFolder}/` +track);
    currentsong.src = `/${currFolder}/` + track;
    if (!pause) {
        currentsong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"

    currentIndex = songs.indexOf(track);
}

async function displayAlbums() {
    let a = await fetch(`/songs/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".cardcontainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0];
            let a = await fetch(`/songs/${folder}/info.json`);
            let response = await a.json();
            cardcontainer.innerHTML = cardcontainer.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512">
                                <circle fill="#01A437" cx="256" cy="256" r="256" />
                                <path fill="#42C76E"
                                    d="M256 9.28c136.12 0 246.46 110.35 246.46 246.46 0 3.22-.08 6.42-.21 9.62C497.2 133.7 388.89 28.51 256 28.51S14.8 133.7 9.75 265.36c-.13-3.2-.21-6.4-.21-9.62C9.54 119.63 119.88 9.28 256 9.28z" />
                                <path fill="black"
                                    d="M351.74 275.46c17.09-11.03 17.04-23.32 0-33.09l-133.52-97.7c-13.92-8.73-28.44-3.6-28.05 14.57l.54 191.94c1.2 19.71 12.44 25.12 29.04 16l131.99-91.72z" />
                            </svg>
                        </div>
                        <img src="/songs/${folder}/cover.jpg" alt="Animal">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`

        }
    }
    Array.from(document.getElementsByClassName("card")).forEach(e => {

        e.addEventListener("click", async item => {
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
            playMusic(songs[0].replaceAll("%20", " "), true);
            playMusic(songs[0]);
        })
    })
}



async function main() {
    await getSongs("songs/playlist");
    playMusic(songs[0].replaceAll("%20", " "), true)

    displayAlbums()

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "img/pause.svg"
        }
        else {
            currentsong.pause();
            play.src = "img/play.svg"
        }
    });

    currentsong.addEventListener("timeupdate", () => {
        // console.log(currentsong.currentTime, currentsong.duration);      
        document.querySelector(".songtime").innerHTML = `${secondstominutes(currentsong.currentTime)} / ${secondstominutes(currentsong.duration)}`
        document.querySelector(".circle").style.left = `${(currentsong.currentTime / currentsong.duration) * 100}%`;
    })

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = ((currentsong.duration) * percent) / 100;
    })

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-200%";
    })

    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        if (index - 1 >= 0) {
            playMusic(songs[index - 1])
        }
    })

    next.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        if (index + 1 > length) {
            playMusic(songs[index + 1])
        }

    })

    previous.addEventListener("click", () => {
        if (currentIndex - 1 >= 0) {
            playMusic(songs[currentIndex - 1]);
            currentIndex--;
        }
    });

    next.addEventListener("click", () => {
        if (currentIndex + 1 < songs.length) {
            playMusic(songs[currentIndex + 1]);
            currentIndex++;
        }
    });
    document.querySelector(".range").getElementsByTagName("input")[0].value = 100;
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentsong.volume = parseInt(e.target.value) / 100;
    })

    document.querySelector(".volume>img").addEventListener("click", e => {
        if (e.target.src.includes("img/volume.svg")) {
            e.target.src = e.target.src.replace("img/volume.svg", "img/mute.svg")
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0

        }

        else {
            e.target.src = e.target.src.replace("img/mute.svg", "img/volume.svg")
            currentsong.volume = 0.1;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10
        }
    })

}

main();