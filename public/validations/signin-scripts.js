window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignIn = document.querySelector('#formularioSignIn');

    //CONTADOR
    let count =0;

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const buttom =document.querySelector('.botonSignUp');
    const message = document.querySelector ('small');

    formsSignIn.addEventListener('submit',  function (e){
        let count = 0;
        
       
       control();

       console.log(count) ;
       if (count > 0) {
           e.preventDefault();
       }
       async function control()   {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();



        function setErrorsFor(input, msg) {
             count +=1
            const formular = input.parentElement;
            


            message.innerText = msg ;


            formular.classList.remove('success');
            formular.classList.add ('error');
        }

        function setSuccesFor(input) {
            const formular = input.parentElement;

            formular.classList.remove('error');
            



        }







            





             if(emailValue===''){

             setErrorsFor(email,'Credenciales Invalidas')
             }else{
                 setSuccesFor(email)

             }


             if(passwordValue===''){
                 setErrorsFor(password,'Credenciales Invalidas')

             }else  {
                 setSuccesFor(password)
             }

             try {
                const data = {
                    email: email.value
                  }
                const res = await axios.post('http://localhost:3002/user/sign-up/check', {data});
                const emailrepeat = (res.data.error);

                if (!emailrepeat){
                    message.innerHTML ='Credenciales Invalidas'
                    message.style.visibility='visible'
                    message.style.color ='red'
                }

            } catch (error) {
                console.log(error.message)

            }




        }})
})