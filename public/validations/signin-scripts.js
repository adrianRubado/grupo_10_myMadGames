
window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignIn = document.querySelector('#formularioSignIn');

    //CONTADOR
    let count =0;

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const buttom =document.querySelector('botonSignUp')

    formsSignIn.addEventListener('submit', async function (e){
        e.preventDefault(); 

        

       
    

       
            
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            
    
                
        
        
             if(emailValue===''){
             'El email esta sin completar'
             }
             if(passwordValue===''){
                 'La contraseña es obligatoria'
             
             }
           
             try {
                const data = {
                    email: email.value
                  }
                const res = await axios.post('http://localhost:3002/user/sign-up/check', {data});
                const emailrepeat = (res.data.error);

                if (!emailrepeat){
                    'Invalid credentials'
                }
                
            } catch (error) {
                console.log(error.message)
                
            }
        
        
        
    
        })
})