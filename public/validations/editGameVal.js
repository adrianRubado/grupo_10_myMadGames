window.addEventListener('load', function(){

    let formEdit = document.querySelector("form.form-edit-game")
    let nameInput = document.querySelector("#name-input-edit-game")   
    let priceInput = document.querySelector("#price-input-edit")
    let genreInput = document.querySelector(".genreToCheck")
    let platformInput = document.querySelector("#radio-plat")
    let videoInput =  document.querySelector("#link") 



  
    
    formEdit.addEventListener("submit", function(e) {  
        let errors = [];
        if(nameInput.value == ""){ 
            errors.push("El juego debe tener un nombre")
        }

        if(priceInput.value == "" ){
            errors.push("El juego debe tener un precio")
        }

        
        if(priceInput.value <= 0 ){
            errors.push("El precio debe ser mayor a $0")
        }

        if(priceInput.value.includes("$")) {

            errors.push("No debes agregar el simbolo $ en el precio")
        }

        if(videoInput.value.includes("embed") == false ) {
            errors.push("El video debe ser de tipo embebido")
        }

         if(genreInput.value == undefined) { 
             errors.push("El juego debe pertenecer a un género"); 
         }
         if(platformInput.value == undefined) { 
             errors.push("EL juego debe pertener a una plataforma")
         }


        if(errors.length > 0 ) {
            e.preventDefault() ;

            let msgErrors = document.querySelector();

            msgErrors.style.display = "flex";

            

            for (let i = 0; i < errors.length; i++) {
                const element = array[i];
                
            }
        }
    } )
    
    })
    