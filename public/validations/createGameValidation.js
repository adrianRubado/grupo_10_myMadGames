window.addEventListener("load", (e) => {

    const inputNameGame = document.querySelector("#nameGame")
    const inputPriceGame = document.querySelector("#price")
    const inputLinkGame = document.querySelector("#link")
    const inputGenre = document.querySelector("genre")
    const inputPlatform = document.querySelector("#platform")
    const formCreateGame = document.querySelector("#formularioCreateGame")


console.log(formCreateGame)


    formCreateGame.addEventListener("submit", (e) => {   

         
            let errors = [];
            if(inputNameGame.value == ""){ 
                errors.push("El juego debe tener un nombre")
                 
                     inputNameGame.style.border = "4px solid red"
                      inputNameGame.addEventListener("keyup", function(e) { 
                          if(inputNameGame.value.length >= 3) { 
    
                            inputNameGame.style.border = "6px solid #2ae42a"
    
    
                          }
                      
    
                      } )
    
            }
    
            if(inputPriceGame.value == "" ){
                errors.push("El juego debe tener un precio")
                inputPriceGame.style.border = "4px solid red"
    
                if(inputPriceGame.value <= 1 ){
                    errors.push("El precio debe ser mayor a $9")
                    inputPriceGame.style.border = "4px solid red"
                    inputPriceGame.addEventListener("keyup", function(e) { 
                       if(inputPriceGame.value.length > 1) { 
        
                        inputPriceGame.style.border = "6px solid #2ae42a"
        
                       }
        
        
        
                       })
        
        
                }
            }
             
             
      
    
            if(inputPriceGame.value.includes("$")) {
    
                errors.push("No debes agregar el simbolo $ en el precio")
                inputPriceGame.style.border = "4px solid red"
            }
    
            if(inputLinkGame.value.includes("embed") == false ) {
                errors.push("El video debe ser de tipo embebido")
                  inputLinkGame.style.border = "4px solid red";
    
    
                  inputLinkGame.addEventListener( "blur", e => { 
     
                       if (inputLinkGame.value.includes("embed") == true) 
                           {    inputLinkGame.style.border = "4px solid #2ae42a"}else { 
                            inputLinkGame.style.border = "4px solid red"
    
                           }
     
                  })
                  
             
            }
    
            /* if(inputGenre.value == undefined) { 
                 errors.push("El juego debe pertenecer a un género"); 
             }
             if(inputPlatform.value == undefined) { 
                 errors.push("EL juego debe pertener a una plataforma")
             }*/
    
    
            if(errors.length > 0 ) {
                e.preventDefault() ;
    
                alert("revisa los errores para poder continuar")
    
               let msgErrors = document.querySelector('.errors-container')
                let ulErrors = document.querySelector(".errors-js")
    
                msgErrors.style.display = "flex";
                ulErrors.style.alignIntems = "center"
                ulErrors.innerHTML = ""
                errors.forEach(  error => { ulErrors.innerHTML += "<li>" + error + "<li>"  }  );
    
    
            }
        } )

})