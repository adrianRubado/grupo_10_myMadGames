window.addEventListener('load', function(){

   console.log("hola ma")

   const name = document.querySelector('#name-input-edit-game');
   const price = document.querySelector('#price-edit');
   const platforms = document.querySelector('#platforms-edit');
   const description = document.querySelector('#txt-description-edit');
   const link = document.querySelector('#video-link-edit');
   const image = document.querySelector('#input-image-edit');
   const genre = document.querySelector('#genre-edit');
   const  formUpdate = document.querySelector('#editGameForm') ;
    
    
    let errors = [] ;
    formUpdate.addEventListener ('submit',  function(e) {
         
        e.preventDefault();
     
        if(name.value == ''){
            errors.push ('El juego debe tener un nombre')}   
        if(description.value.length < 20) {
            errors.push ('La descripcion debe poseer al menos 20 caracteres') }
    
        if(platforms.value == undefined){
            errors.push ('El juego debe tener una plataforma asociada')}

        if(link.value ==''){
                errors.push ('Te falto añadir una URL de Video')}
    
        if(genre.value == undefined){
                    errors.push ('El juego debe tener un género')}
    
        if(price.value ==''){
                        errors.push('El juego debe tener un precio')}
    
             if(errors.length > 0) {                                                  
                            const errorUl = document.querySelector(".errors-js")
                            const errorConteiner = document.querySelectorAll(".errors-container")
                            errorConteiner.style.displayFlex = "column"
                      

                            for (let i = 0 ; i < errors.length ;i++) {                                
                                errorsList.innerHTML +='<li>' + errors[i] + '</li>' ; } ;  
    }else{e.submit()}
    
         
    })
    
    })
    