import "./style.css";
let palo = ["♦", "♥", "♠", "♣"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

let sorteoPalo = Math.floor(Math.random() * palo.length);
let sorteoNumber = Math.floor(Math.random() * number.length);
let contenedorNumber = number[sorteoNumber];
let contenedorPalo = palo[sorteoPalo];
let color = contenedorPalo == "♦" || contenedorPalo == "♥" ? "red" : "black";

document.getElementById("arriba").innerHTML = contenedorPalo;
document.getElementById("arriba").style.color = color;
document.getElementById("medio").innerHTML = contenedorNumber;
document.getElementById("medio").style.color = color;
document.getElementById("abajo").innerHTML = contenedorPalo;
document.getElementById("abajo").style.color = color;
