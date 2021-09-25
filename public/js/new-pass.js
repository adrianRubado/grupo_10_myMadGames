window.addEventListener("load", () => {      

const submitBtton = document.querySelector("#submit-new-pass");
const allInputsConteiner = document.querySelectorAll(".contenedor-inputs-new-pass");
const contenedorFormularioSignIn = document.querySelector(".contenedorFormularioSignIn")
const formNewPass = document.querySelector("#formNewPass");
const main = document.querySelector("#mainSignIn")
const checkEmailInput = document.querySelector("#confirmEmailToChangePass");
const msgEmail = document.querySelector(".sent-email");

const linkJoystic = document.querySelector("#linkToRpass"); 
const joysticConfirmMail = document.querySelector("#joysConfirmPass")
const inputConfirmMail = document.querySelector("#confirmChecked")

linkJoystic.addEventListener("click", (e) => {

    if(inputConfirmMail.checked != true) {  alert("Debes tildar si confirmaste la contraseña"); e.preventDefault()}
    
    

 
 

 })



/*submitBtton.addEventListener("click", (e)=>  {   
e.preventDefault();

contenedorFormularioSignIn.style.display = 'none'

msgEmail.style.display = "flex"

msgEmail.style.height = "80vh"


*/

})