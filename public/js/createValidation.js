window.addEventListener('load', function(){

    let formEdit = document.querySelector("form")   
    let priceInput = document.querySelector("#price")
    let genreInput = document.querySelector("#genre")
    let platformInput = document.querySelector("#radio")
    let videoInput =  document.querySelector("#link") 
 
  

    console.log("pepe")




    formEdit.addEventListener("submit", function(e) {  
        let errors = [];
        if(nameInput.value == ""){ 
            errors.push("El juego debe tener un nombre")
             
                 nameInput.style.border = "4px solid red"
                  nameInput.addEventListener("keyup", function(e) { 
                      if(nameInput.value.length >= 3) { 

                        nameInput.style.border = "6px solid #2ae42a"


                      }
                  

                  } )

        }

        if(priceInput.value == "" ){
            errors.push("El juego debe tener un precio")

            if(priceInput.value <= 1 ){
                errors.push("El precio debe ser mayor a $9")
                priceInput.style.border = "4px solid red"
                 priceInput.addEventListener("keyup", function(e) { 
                   if(priceInput.value.length > 1) { 
    
                     priceInput.style.border = "6px solid #2ae42a"
    
                   }
    
    
    
                   })
    
    
            }
        }
         
         
  

        if(priceInput.value.includes("$")) {

            errors.push("No debes agregar el simbolo $ en el precio")
        }

        if(videoInput.value.includes("embed") == false ) {
            errors.push("El video debe ser de tipo embebido")
              videoInput.style.border = "4px solid red";


              videoInput.addEventListener( "blur", e => { 
 
                   if (videoInput.value.includes("embed") == true) 
                       {    videoInput.style.border = "4px solid #2ae42a"}else { 
                        videoInput.style.border = "4px solid red"

                       }
 
              })
              
         
        }

         if(genreInput.value == undefined) { 
             errors.push("El juego debe pertenecer a un género"); 
         }
         if(platformInput.value == undefined) { 
             errors.push("EL juego debe pertener a una plataforma")
         }


        if(errors.length > 0 ) {
            e.preventDefault() ;

            alert("revisa los errores para poder continuar")

           let msgErrors = document.querySelector('.errors-container')
            let ulErrors = document.querySelector(".errors-js")

            msgErrors.style.display = "flex";
            ulErrors.style.alignIntems = "center"
            
            errors.forEach(  error => { ulErrors.innerHTML += "<li>" + error + "<li>"  }  );


        }
    } )

    console.log(genreInput.value)



    
    })
    