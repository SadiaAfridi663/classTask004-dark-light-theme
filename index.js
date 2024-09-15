
const button = document.getElementById("btn");
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.fontSize = "1em";

const body = document.getElementById("body");
const themeIcon = document.getElementById("theme-icon")

document.getElementById('btn').addEventListener('click', function () {
    if (button.style.backgroundColor === "black") {
        button.style.backgroundColor = "white";
        button.style.color = "black";
        body.style.backgroundColor = "black";
        themeIcon.className = "fa-solid fa-sun fa-xl fa-beat-fade"
        themeIcon.style.color = "#FFD500"
    } else {
        button.style.backgroundColor = "black";
        button.style.color = "white";
        body.style.backgroundColor = "white";
        themeIcon.className = "fa-solid fa-moon fa-xl fa-beat-fade "
        themeIcon.style.color = "white"
    }
});

