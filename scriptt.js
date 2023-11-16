//Cache the DOM
var button = document.getElementById("buton")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var asteptari = document.getElementById("educatie")
var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

//Add event listener to button
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
    an.innerHTML = year - an.innerHTML
}

function altaViata()
{
     nume.innerHTML = "Functie: Java Dev"
     prenume.innerHTML = "Locul de munca: Ibiza"
     asteptari.innerHTML = "Experiente: <ol><li>
internship</li><li>licenta nota 10</li></ol>"
     img.src = "imagine.jpg" 
     
     body.style.backgroundColor = "orange"
     body.style.color = "blue"
     img.style.opacity = "70%"
     img.style.borderWidth = "25px"
     img.style.width = "300px"
     img.style.height = "200px"
}