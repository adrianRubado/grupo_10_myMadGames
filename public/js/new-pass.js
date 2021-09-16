window.addEventListener("load", () => {      

const submitBtton = document.querySelector("#submit-new-pass");

const allInputsConteiner = document.querySelectorAll(".contenedor-inputs-new-pass");

const contenedorFormularioSignIn = document.querySelector(".contenedorFormularioSignIn")

const formNewPass = document.querySelector("#formNewPass");

const main = document.querySelector("#mainSignIn")


const msgEmail = document.querySelector(".sent-email")

console.log("hpla")

submitBtton.addEventListener("click", (e)=>  {   
e.preventDefault();

contenedorFormularioSignIn.style.display = 'none'

msgEmail.style.display = "flex"

msgEmail.style.height = "80vh"








})














} )