window.addEventListener('load', function(){

   console.log("hola ma")

   const name = document.querySelector('#name-input-edit-game');
   const price = document.querySelector('#price-edit');
   const platforms = document.querySelector('#platforms-edit');
   const description = document.querySelector('#txt-description-edit');
   const link = document.querySelector('#video-link-edit');
   const image = document.querySelector('#input-image-edit');
   const genre = document.querySelector('#genre-edit');



    let formUpdate = document.querySelector('#editGameForm') ;
    
    
    let errors = [] ;
    formUpdate.addEventListener ('submit', async function(e){
    
     
    
        //NOMBRE
        if(name.value ==''){
            errors.push ('El nombre es un campo obligatorio')
        }
        if(name.value.length < 4){
            errors.push ('El nombre debe contener al menos 5 caracteres')
        }   
    //DESCRIPCION
        if(description.value.length < 20) {
            errors.push ('La descripcion debe poseer al menos 20 caracteres') ;
        }
    
    //IMAGEN
        var fileExt = /(.jpg|.png|.jpeg|.gif|)$/i;
        if (!fileExt.exec (image.value)) {
            errors.push ('El tipo de archivo debe ser JPG / PNG / JPEG / GIF') ;
        }
    //PLATAFORMA
        if(platforms.value == undefined){
            errors.push ('Debe pertenecer a almenos una plataforma')}
    //LINK
        if(link.value ==''){
                errors.push ('El LINK es un campo obligatorio')}
    //GENERO
        if(genre.value == undefined){
                    errors.push ('Debe pertenecer a almenos un genero')}
    //PRECIO
        if(price.value ==''){
                        errors.push ('El precio es un campo obligatorio')}
                       
    
    
        
    
    
             if(errors.length > 0) {
        
                            e.preventDefault() ;                                                   //En caso de que haya errores, rechazamos la peticion por dafult del Submit
                            let errorsList = document.querySelector ('.errors-createGame')
                            for (let i = 0 ; i < errors.length ;i++) {                                
                                errorsList.innerHTML +='<li>' + errors[i] + '</li>' ;              //Recorremos el array de errores ppara hacer un listado de ellos en el ul de errors-signup
                                
                            }
                            errorsList.style.color ('red') ;  //COLOR ROJO A LOS ERRORES
    }
    
         
    })
    
    })
    