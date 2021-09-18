window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignIn = document.querySelector('#formularioSignIn');

    //CONTADOR
    let count =0;

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const buttom =document.querySelector('.botonSignUp');
    const message = document.querySelector ('small');

    formsSignIn.addEventListener('submit', async function (e){
      
        

            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();


            control ();
            console.log(count)

            if (count > 0) {
                
                 e.preventDefault();
                 
             }





             async  function control(){ if(emailValue===''){
                count ++;
               message.classList.remove ('show-errors')
                message.classList.add ('show-errors')
            message.innerHTML ='Credenciales Invalidas'
            }
            if(passwordValue===''){
               count ++;
               message.classList.remove ('show-errors')
                message.classList.add ('show-errors')
               message.innerHTML ='Credenciales Invalidas'

            }

            try {
               const data = {
                   email: email.value
                 }
               const res = await axios.post('http://localhost:3002/user/sign-up/check', {data});
               const emailrepeat = (res.data.error);

               if (!emailrepeat){
                   count ++;
                   message.classList.remove ('show-errors')
                   message.classList.add ('show-errors')
                  message.innerHTML ='Credenciales Invalidas'
               }

           } catch (error) {
               console.log(error.message)

           }} 
            
          




        })
})