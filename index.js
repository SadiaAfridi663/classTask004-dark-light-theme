// const button = document.getElementById("btn")
// button.style.backgroundColor = "black"
// button.style.color = "white"
// button.style.fontSize = "1em"
// const body = document.getElementsByTagName("body")[0];
// const themeImg = document.getElementById("theme-img")

// document.getElementById('btn').addEventListener('click', function () {
//     if (button.style.backgroundColor === "black") {
//         // button.innerText = "Night"
//         button.style.backgroundColor = "white";
//         button.style.color = "black";
//         body.style.backgroundColor = "black";
//         themeImg.src = "./assets/moon.png"

//     } else {
//         // button.innerText = "Day"
//         button.style.backgroundColor = "black";
//         button.style.color = "white";
//         body.style.backgroundColor = "white";
//         themeImg.src = "./assets/sun.png"

//     }
// })

const button = document.getElementById("btn");
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.fontSize = "1em";

const body = document.getElementById("body");
const themeImg = document.getElementById("theme-img"); 

document.getElementById('btn').addEventListener('click', function () {
    if (button.style.backgroundColor === "black") {
        button.style.backgroundColor = "white";
        button.style.color = "black";
        body.style.backgroundColor = "black";
        themeImg.src = "./assets/sun25.png";
    } else {
        button.style.backgroundColor = "black";
        button.style.color = "white";
        body.style.backgroundColor = "white";
        themeImg.src = "./assets/moon.png";
    }
});

