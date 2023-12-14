"use strict"
const button = document.getElementById("btn")
const body_el = document.querySelector("body")
const generateRandomNumber = () =>{
return Math.floor(Math.random() * 256)
}

button.addEventListener("click", () => {
    const randomNumber = generateRandomNumber()
    body_el.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`
})