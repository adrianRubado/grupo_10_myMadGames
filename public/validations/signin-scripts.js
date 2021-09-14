
window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignIn = document.querySelector('#formularioSignIn');


    //Definimos un array con los errores a reflejar


    let errors = [];




    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    

                             
    const small = document.querySelector('small');



    formsSignIn.addEventListener('submit', function (e){
        e.preventDefault();

        control();
    })

        function control()   {
            
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            
           
    
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

             if(emailValue===''){
                 setErrorsFor (email, 'El email esta sin completar')

             

             }else{
                 setSuccesFor(email) ;
             }

             




             if(passwordValue===''){
                 setErrorsFor(password, 'La contraseña esta sin completar')
             
             }else {
                 setSuccesFor(password)
             }
        
        
        
        
        
        
        }})