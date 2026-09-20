
function myFunction() {
    document.body.style.backgroundColor = "rgb(17, 17, 17)";
    document.getElementById("darkmode").style.display = "none";
    document.getElementById("lightmode").style.display = "flex";
    document.querySelectorAll(".nav").forEach(element => {
        element.style.color = "white";
    });
    document.querySelectorAll(".color").forEach(element => {
        element.style.color = "white";
    });
    document.querySelector(".form").style.backgroundColor = "rgb(30, 30, 30)";
    document.querySelectorAll(".input").forEach(element => {
        element.style.backgroundColor = "rgb(223, 202, 186)";
    });
    document.querySelector(".input2").style.backgroundColor = "rgb(223, 202, 186)";
}

function action() {
    document.body.style.backgroundColor = "rgb(255, 248, 243)";
    document.getElementById("lightmode").style.display = "none";
    document.getElementById("darkmode").style.display = "flex";
    document.querySelectorAll(".nav").forEach(element => {
        element.style.color = "black";
    });
    document.querySelectorAll(".color").forEach(element => {
        element.style.color = "black";
    });
    document.querySelector(".form").style.backgroundColor = "rgb(234, 221, 211)";

    document.querySelectorAll(".input").forEach(element => {
        element.style.backgroundColor = "white";
    });
    document.querySelector(".input2").style.backgroundColor = "white";

}