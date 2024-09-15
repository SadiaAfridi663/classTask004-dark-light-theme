const button = document.getElementById("btn")
button.style.backgroundColor = "black"
button.style.color = "white"
button.style.fontSize = "1em"
const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "white"
document.getElementById('btn').addEventListener('click', function () {
    if (button.style.backgroundColor === "black") {
        button.innerText = "Night"
        button.style.backgroundColor = "white";
        button.style.color = "black";
        body.style.backgroundColor = "black"; 
    } else {
        button.innerText = "Day"
        button.style.backgroundColor = "black";
        button.style.color = "white";
        body.style.backgroundColor = "white";
    }
});


