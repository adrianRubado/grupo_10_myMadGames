
window.addEventListener('load', function () {


    //Primero capturamos el formulario a trabajar

    let formsSignup = document.querySelector('.formularioSignUp');


    //Definimos un array con los errores a reflejar


    let count = 0;

//Definimos un array con los errores a reflejar



    let errors =[] ;
    const firstName = document.querySelector('#first-name');

    const lastName = document.querySelector('#last-name');
    const password = document.querySelector('#password');
    const email = document.querySelector('#email');

    const birthDay = document.querySelector('#bday');
    const fileImage = document.querySelector('#botonCoverPhoto');                           //Definimos el acceso a cada uno de los campos de los formularios
    const small = document.querySelector('small');



    formsSignup.addEventListener('submit',  function (e){



        control();

        console.log(count) ;
        if (count > 0) {
            e.preventDefault();
        }


        async function control()   {

            const firstNameValue = firstName.value.trim();
            const lastNameValue = lastName.value.trim();
            const passwordValue = password.value.trim();
            const emailValue = email.value.trim();
            const fileImageValue = fileImage.value.trim();
            const bdayValue = birthDay.value;

            function setErrorsFor(input, msg) {
                 count +=1
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
             try {
                const data = {
                    email: email.value
                  }
                const res = await axios.post('http://localhost:3002/user/sign-up/check', {data});
                const emailrepeat = (res.data.error);

                if (emailrepeat){

                    let div =email.parentElement;
                    div.querySelector('.form-controle');
                    div.classList.remove ('success');
                    div.classList.add ('error');
                    let small=email.parentElement.querySelector('small')
                    small.innerHTML ='Este email ya se encuentra en uso';
                    small.style.visibility='visible'
                    small.style.color ='red'




                }else{
                    let div =email.parentElement;
                    div.querySelector('.form-controle');
                    div.classList.remove('error');
                    div.classList.add ('success');
                    let small = email.parentElement.querySelector('small');
                    small.innerHTML ='';
                    small.style.visibility = 'hidden' ;




                }

            } catch (error) {
                console.log(error.message)

            }









        }


    })

        email.addEventListener('change', async function (e) {


            try {
                const data = {
                    email: email.value
                  }
                const res = await axios.post('http://localhost:3002/user/sign-up/check', {data});
                const emailrepeat = (res.data.error);

                if (emailrepeat){

                    let div =email.parentElement;
                    div.querySelector('.form-controle');
                    div.classList.remove ('success');
                    div.classList.add ('error');
                    let small=email.parentElement.querySelector('small')
                    small.innerHTML ='Este email ya se encuentra en uso';
                    small.style.visibility='visible'
                    small.style.color ='red'




                }else{
                    let div =email.parentElement;
                    div.querySelector('.form-controle');
                    div.classList.remove('error');
                    div.classList.add ('success');
                    let small = email.parentElement.querySelector('small');
                    small.innerHTML ='';
                    small.style.visibility = 'hidden' ;




                }

            } catch (error) {
                console.log(error.message)

            }



        })







    })















// cambio de color al completar form

window.addEventListener("load" , function (){


    const name = document.querySelector("#first-name");

    name.addEventListener("keyup", function(event){

       if (name.value.length <= 3) {

          name.style.border = "5px solid red "

       }else if((name.value.length <= 6) && (name.value.length>= 3)) {



        name.style.border = "5px solid orange "
       } else if(name.value.length>6) {
        name.style.border = "5px solid #7bfc7b "}



     })
     const lastName = document.querySelector("#last-name");

    lastName.addEventListener("keyup", function(event){

        if (lastName.value.length <= 3) {

           lastName.style.border = "5px solid red "

        }else if((lastName.value.length <= 6) && (lastName.value.length>= 3)) {



         lastName.style.border = "5px solid orange "
        } else if(lastName.value.length>6) {
         lastName.style.border = "5px solid #7bfc7b"}



      })

      const password = document.querySelector("#password");

    password.addEventListener("keyup", function(event){

        if (password.value.length <= 3) {

            password.style.border = "5px solid red "

        }else if((password.value.length <= 6) && (password.value.length>= 3)) {



            password.style.border = "5px solid orange "
        } else if(password.value.length>6) {
            password.style.border = "5px solid #7bfc7b "}

         const email = document.querySelector("#email");

         email.addEventListener("keyup", function(event){

        if (email.value.length <= 3) {

            email.style.border = "5px solid red "

        }else if((email.value.length <= 6) && (email.value.length>= 3)) {



            email.style.border = "5px solid orange"
        } else if(email.value.length>6) {
            email.style.border = "5px solid #7bfc7b"}



      })




      })








} )





