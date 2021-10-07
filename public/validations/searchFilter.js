window.addEventListener('load', async function () {
    let genreChecks = document.querySelectorAll('.genreToCheck')
    let filterButton = document.querySelector('.botonSignIn')
    let platformChecks = document.querySelectorAll('.platformToCheck')
    let gamesContainer = document.querySelector('.games-conteiner')







    filterButton.addEventListener('click',async (e)=>{
        let genreArray = []
        let platformArray = []
        genreChecks.forEach(gc=>{
            if(gc.checked){
                genreArray.push(parseInt(gc.value))
            }
        })


        platformChecks.forEach(pc=>{
            if(pc.checked){
                platformArray.push(parseInt(pc.value))
            }
        })


        let data = {
            genres : genreArray,
            platforms : platformArray

        }
        let res = await axios.post('http://localhost:3002/products/filter', {data});

        if(res.data.length == 0){
            gamesContainer.innerHTML = '<h2 color = white margin =auto text-align = center>No se encontraron resultados para esta busqueda</h2>'
        }else{
        gamesContainer.innerHTML = ''
        res.data.forEach(g =>{
            gamesContainer.innerHTML +=  `<article class="individual-game-container">






            <div class="image-containe">
             <a href="/products/${g.id}"> <img src = ${g.image}   alt="game" width="160px"  class="image-game-cover"></a>
       </div>
       <div class="cont-price-buttons">
          <a href="/products/${g.id}"> <h3 class="game-name"> ${g.name}   </h3></a>
           <h4 class="game-price">$${g.price} </h4>


           <!-- <div class="buttons-article-container">
           <a buy-button-search><i class="fas fa-shopping-cart cart-article-search">Agregar</i> </a><br> <a class="buy-button-search" >Comprar</a>
         </div> -->
         </div>
         </article>`

        })
    }





    })




})