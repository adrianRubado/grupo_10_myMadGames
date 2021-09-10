
window.addEventListener("load",function(){


//Primero capturamos el formulario a trabajar

let formsSignup = document.querySelector(".formularioSignUp");




//Definimos un array con los errores a reflejar


formsSignup.addEventListener("submit", function(e){

    let errors =[] ;
    const firstName = document.querySelector('#first-name');

    const lastName = document.querySelector('#last-name');
    const password = document.querySelector('#password');
    const email = document.querySelector ('#email');
    /* fetch ('http://localhost:3002/sign-up/check') ; */
    const birthDay = document.querySelector ('#bday');
    const fileImage = document.querySelector('#botonCoverPhoto');                           //Definimos el acceso a cada uno de los campos de los formularios
    const small = document.querySelector('small');
//Nombre


function setErrorsFor(input,msg){
    const formular=input.parentElement;
    const small =formular.querySelector('small');
    small.innerText = msg;
    formular.className= 'formularySignup error';


}
function setSuccesFor(input){
    const formular=input.parentElement;
    const small =formular.querySelector('small');

    formular.className= 'formularySignup succes';


}

    if(firstName.value.trim() ===''){
       setErrorsFor(firstName,'El usuario está vacio')
    }else{
        setSuccesFor(firstName)
    }
    if((firstName.value.length < 2)){

       setErrorsFor (firstName,'El Nombre contiene menos de dos caracteres')

    }else{
        setSuccesFor(firstName)
    }

//Apellido
    if(lastName.value.trim ==''){
        setErrorsFor (lastName,'El Apellido está vacío');
    }else{
        setSuccesFor(lastName) ;
    }
    if((lastName.value.length < 2)){

        setErrorsFor (lastName,'El Apellido contiene menos de dos caracteres') ;

    }else{
        setSuccesFor(lastName)
    }

//Email

    if(email.value == '') {
        setErrorsFor (email,'El Email está vacío');
    }
      var exp = /\w+@\w+\.+[a-z]/ ;                                //Aca son las expresiones regulares
    if(exp.test (email.value)) {
        errors.push ('El email es invalido') ;
    }


    /* if (email) */




 //Contraseña
    if(password.value ==='') {
        errors.push('La contraseña está vacía') ;
    }
    if(password.value ==='') {
        errors.push('La contraseña está vacía') ;
    }
    if(password.value.length > 8) {
        errors.push('La contraseña debe contener mas de ocho caracteres') ;
    }
    if(!password.value.match(/[A-Z]/)) {
    errors.push('La contraseña debe contener al menos una letra en mayuscula') ;
}
    if(!password.value.match(/[a-z]/)) {
    errors.push('La contraseña debe contener al menos una letra en minuscula') ;

}
/* if (!password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){                                                          //Expresion regular para caracteres
    errors.push ('La contraseña debe poseer al menos un caracter especial') ;
} */

//Imagen
    var fileExt = /(.jpg|.png)$/i;

    if(!fileExt.exec (fileImage.value)){
        errors.push ('El tipo de archivo permitido unicamente es .JPG o .PNG ')
    }
    if(fileImage.value ==='') {
        errors.push ('Este campo es obligatorio')
    }

    /* if(errors.length > 0) { */

       /*  e.preventDefault() ;                                 //En caso de que haya errores, rechazamos la peticion por dafult del Submit
        let errorsList = document.querySelector ('.errors-signup')
        for (let i = 0 ; i < errors.length ;i++) {
            errorsList.innerHTML +='<li>' + errors[i] + '</li>' ;              //Recorremos el array de errores ppara hacer un listado de ellos en el ul de errors-signup

        }
        errorsList.style.color ('red') ; //Definimos el color rojo */

    })





})





