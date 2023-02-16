const textareaEL = document.getElementById("textarea");
const totalCountEL = document.getElementById("total-counter");
const remEL = document.getElementById("rem-counter");

textareaEL.addEventListener("keyup", ()=>{
    updateCounter();
})
updateCounter();
function updateCounter(){
    totalCountEL.innerText = textareaEL.value.length;
    remEL.innerText=textareaEL.getAttribute("maxLength") -textareaEL.value.length ; 
}