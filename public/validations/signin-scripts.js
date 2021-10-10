window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignIn = document.querySelector('#formularioSignIn');

    //CONTADOR
    

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const buttom =document.querySelector('.botonSignUp');
    const message = document.querySelector ('small');
    let count = 1;
    formsSignIn.addEventListener('submit',  async function (e){
        
        console.log(count);
        if (logged == false) {
            e.preventDefault();
             
            email.style.borderColor = 'red'
            password.style.borderColor = 'red'
            message.innerHTML = 'Credenciales invalidas';
            message.style.visibility='visible';
            message.style.color = 'red';
        }else{
           
        console.log(e);       }
       
        
       
       control();
       

       console.log(count) ;
       
       
       async function control()   {
      
        try {
            const data = {
                email: email.value,
                password : password.value
              }
             
            const res = await axios.post('http://localhost:3002/user/sign-in/check', {data});

            
            const logged =  await(res.data.log);
            
            
            
        
            
            console.log(logged);
            
            

          

        } catch (error) {
            console.log(error.message)

        }
        
        
         
               
           
           
        
        
        
        
        






             



        }
    })
})
