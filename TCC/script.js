const text_el = document.querySelector("#text")
const count_el = document.querySelector(".count")
const warning_el = document.querySelector(".warning")
const error_el = document.querySelector(".error")
const addable_count = document.querySelector("#addable-count")
const excess_count = document.querySelector("#excess-count")
count_el.addEventListener("click", () =>{
    console.log("test")
})

text_el.addEventListener("input", () => {
    count_el.textContent = text_el.value.length 

    if(text_el.value.length >= 21 && text_el.value.length <40){
        warning_el.style.display = "block"
        error_el.style.display = "none"
        warning_el.style.color="yellow"
        text_el.style.color="yellow"

        text_el.addEventListener("input", () => {
            addable_count.textContent = 40 - text_el.value.length })

    }
    else if(text_el.value.length > 40){
        warning_el.style.display = "none"
        error_el.style.display = "block"
        error_el.style.color="red"
        text_el.style.color="red"


        text_el.addEventListener("input", () => {
         excess_count.textContent = text_el.value.length - 40 })
    }
    else{
        warning_el.style.display = "none"
        warning_el.style.color="white"
        text_el.style.color="white"

    }
})