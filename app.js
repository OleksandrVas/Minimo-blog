
let btnClose = document.querySelector(".btn-close")
let modalWindow = document.querySelector(".modal")
let modalShow = document.querySelector(".modal-window-show")
let modalWindowSay = document.querySelector(".modal-window-say")

window.addEventListener("scroll" , scrollHalf)
function scrollHalf() {
    if (window.pageYOffset  >= document.body.scrollHeight/2){
        showModal()
        removeEventListener("scroll",scrollHalf )
    }
}

modalShow.addEventListener("click" , showModal)
btnClose.addEventListener("click" , showModal)
modalWindowSay.addEventListener("click" , showModalSay)
function showModal() {
    modalWindow.classList.toggle("show")
}
function showModalSay(){
    modalWindow.classList.toggle("show")
    alert("Спасибо, мы вам перезвоним !")
}
