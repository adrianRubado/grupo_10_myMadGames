
window.addEventListener('load',function(){


    //Primero capturamos el formulario a trabajar
    
    let formsSignIn =document.querySelectorAll('formularioSignIn');
    
    
                                                                         //Definimos un array con los errores a reflejar
    
    
    let errors =[] ;
    
    formsSignIn.addEventListener('submit', async function(e){
        
    
        const email = document.querySelector ('.inputEmail');
        const password = document.querySelector('.inputPassword'); 
        
                                                                           

    //Email 
    
        if(email.value == '') {
            errors.push ('El Email está vacío');
        }
          var exp = /\w+@\w+\.+[a-z]/ ;                                          //Aca son las expresiones regulares
        if(exp.test (email.value)) {
            errors.push ('El email es invalido') ;
        }
    
        
        if (email) 
    
     
    
    
     //Contraseña
        if(password.value == '') {
            errors.push('La contraseña está vacía') ;
        }
        
    
   
        
        if(errors.length > 0) {
    
            e.preventDefault() ;                                                   //En caso de que haya errores, rechazamos la peticion por dafult del Submit
            let errorsList = document.querySelector ('.errors-signin')
            for (let i = 0 ; i < errors.length ;i++) {                                
                errorsList.innerHTML +='<li>' + errors[i] + '</li>' ;              //Recorremos el array de errores ppara hacer un listado de ellos en el ul de errors-signup
                
            }
            errorsList.style.color ('red') ;                                       //Definimos el color rojo
    
        }
        
    
    })
    
    })









