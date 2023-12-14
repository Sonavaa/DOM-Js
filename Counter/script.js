"use strict";
const increase_button=document.querySelector(".increase")
const decrease_button=document.querySelector(".decrease")
const counter_element=document.querySelector(".counter")
let counter = 0

increase_button.addEventListener("click",() =>{
    counter ++
    if(counter>0){
        counter_element.style.color="green"
    }
    else if(counter ==0){
        counter_element.style.color="white"
    }
    counter_element.textContent=counter
})
decrease_button.addEventListener("click",() => {
    counter--
    if(counter<0){
        counter_element.style.color="red"
    }
    else if(counter ==0){
        counter_element.style.color="white"
    }
    counter_element.textContent=Math.abs(counter)
})
