//var nadpis = "ahoj"; <--zastarale //
let nadpis = document.getElementById("nadpis");
let body = document.getElementById("body");
const zapati = document.querySelector("footer");
const cat = document.querySelector ("img");

nadpis.addEventListener("click", function(){
    console.log('Tohle je z externího souboru');
    nadpis.innerHTML = "konecne parek!!";
    nadpis.style.fontSize = "3em";
    nadpis.style.color = "blue";
    //nadpis.style.display = "none";//
    nadpis.classList.add("bg-success");
    nadpis.classList.remove("text-center");
    nadpis.classList.add("text-right");
});

zapati.addEventListener("mouseover", function(){
    console.log("To je po pohybu nad zapatim")
    zapati.innerHTML = "tohle neni zapati ;)";
    zapati.style.fontSize ="7em";
    zapati.classList.remove("text-left");
    zapati.classList.add("text-center");
    this.style.backgroundColor =("pink");
    zapati.style.fontFamily ="Comic Sans MS", "Comic Sans";
    body.style.fontFamily= "Comic Sans MS", "Comic Sans", cursive;
})
cat.addEventListener("mouseenter", function(){
    cat.src= "../img/bruh.jpg";
});

cat.addEventListener("mouseleave", function(){
    cat.src= "../img/cat.jpg";
});