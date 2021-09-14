
window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignup = document.querySelector('.formularioSignUp');


    //Definimos un array con los errores a reflejar


    let errors = [];




    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const password = document.querySelector('#password');
    const email = document.querySelector('#email');

    const birthDay = document.querySelector('#bday');
    const fileImage = document.querySelector('#botonCoverPhoto');                           //Definimos el acceso a cada uno de los campos de los formularios
    const small = document.querySelector('small');



    formsSignup.addEventListener('submit', function (e){
        e.preventDefault();

        control();
    })

        function control()   {
            
            const firstNameValue = firstName.value.trim();
            const lastNameValue = lastName.value.trim();
            const passwordValue = password.value.trim();
            const emailValue = email.value.trim();
            const fileImageValue = fileImage.value.trim();
            const bdayValue = birthDay.value;
    
            function setErrorsFor(input, msg) {
                const formular = input.parentElement;
                const small = formular.querySelector('small');
                
        
                small.innerText = msg ;
        
                
                formular.classList.remove('success');
                formular.classList.add ('error');
            }
        
            function setSuccesFor(input) {
                const formular = input.parentElement;
                
                formular.classList.remove('error');
                formular.classList.add('success') ;

        
        
            }
            if (firstNameValue === ''){
                setErrorsFor(firstName, "El nombre esta sin completar")
                 
             }else if(firstNameValue.length < 2){
                 setErrorsFor(firstName, "El  nombre debe ser mas largo")
             }else{
                  setSuccesFor(firstName)
             }




             if (lastNameValue === ''){
                setErrorsFor(lastName, "El Apellido esta sin completar")
                 
             }else if(lastNameValue.length < 2){
                 setErrorsFor(lastName, "El  Apellido debe ser mas largo")
             }else{
                  setSuccesFor(lastName)
             }


             function isEmaill(email) {
                return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
             }


             if(emailValue===''){
                 setErrorsFor (email, 'El email esta sin completar')

             

             }else{
                 setSuccesFor(email) ;
             }

             




             if(passwordValue===''){
                 setErrorsFor(password, 'La contraseña esta sin completar')
             }else if (passwordValue.length < 7) {
                 setErrorsFor (password, 'La contraseña debe ser mas larga') 
             }else {
                 setSuccesFor(password)
             }
        
        
        
        
        
        
        }
        
        

        
        


    })




    
    











