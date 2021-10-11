window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignIn = document.querySelector('#formularioSignIn');

    //CONTADOR


    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const buttom = document.querySelector('.botonSignUp');
    const message = document.querySelector('small');
    let count = 0;
    formsSignIn.addEventListener ('submit',  async function (e) {
        
        try {
            
            const data = {
                email: email.value,
                password: password.value
            }
            
            

            const res = await axios.post('http://localhost:3002/user/sign-in/check', { data });
            
            console.log(res);
            
            
            
            const logged = await(res.data.log);
            
            if (!logged) {e.preventDefault();
                
                
                console.log(logged);
                console.log('Hola estoy funcionando');
                email.style.borderColor = 'red'
            password.style.borderColor = 'red'
            message.innerHTML = 'Credenciales invalidas';
            message.style.visibility = 'visible';
            message.style.color = 'red';

            }else{
                return true
               
            }
            
     



        } catch (error) {
            console.log(error.message)

        }
        

      







      


    })
})
