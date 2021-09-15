window.addEventListener('load',function(){

    const plus = document.querySelectorAll('.mas')
    const minus = document.querySelectorAll('.menos')
    const number = document.querySelectorAll('.number')
    const price = document.querySelectorAll('.price')








    plus.forEach(p => {
        p.addEventListener("click", async function(event) {



            let pos = event.path.map(function(e) { return e.className; }).indexOf('juegosChart');
            const gameId = parseInt(event.path[pos].children[1].innerHTML)
            const userId = parseInt(document.querySelector('.userId').innerHTML)



            let pos1 = event.path.map(function(e) { return e.className; }).indexOf('cantidadCart');
            let quantity = event.path[pos1].children[1].innerHTML
            let price = event.path[pos].children[6].innerHTML
            let unitPrice = price / quantity

            if(quantity >= 10){
                window.alert('La cantidad maxima de un juego es 10')
            }else{
                const data = {
                    userId : userId,
                    gameId : gameId,
                    quantity : parseInt(event.path[pos1].children[1].innerHTML) + 1,
                    price : parseInt(event.path[pos].children[6].innerHTML) + parseInt(unitPrice)
                }


                const res = await axios.put('http://localhost:3002/product-cart', {data});
                console.log(res)
                event.path[pos1].children[1].innerHTML++
                event.path[pos].children[6].innerHTML  = parseInt(event.path[pos].children[6].innerHTML) + parseInt(unitPrice)






            }

















          });

    });


    minus.forEach(m =>{
        m.addEventListener("click", async function(event) {
            let pos = event.path.map(function(e) { return e.className; }).indexOf('juegosChart');
            const gameId = parseInt(event.path[pos].children[1].innerHTML)
            const userId = parseInt(document.querySelector('.userId').innerHTML)



                let pos1 = event.path.map(function(e) { return e.className; }).indexOf('cantidadCart');
                let quantity = event.path[pos1].children[1].innerHTML
                let price = event.path[pos].children[6].innerHTML
                let unitPrice = price / quantity


                if(quantity <= 1){
                    window.alert('Debe haber por lo menos 1 juego')
                }else{

                    const data = {
                        userId : userId,
                        gameId : gameId,
                        quantity : parseInt(event.path[pos1].children[1].innerHTML) - 1,
                        price : parseInt(event.path[pos].children[6].innerHTML) - parseInt(unitPrice)
                    }

                    const res = await axios.put('http://localhost:3002/product-cart', {data});
                    console.log(res)
                    event.path[pos1].children[1].innerHTML--
                    event.path[pos].children[6].innerHTML = parseInt(event.path[pos].children[6].innerHTML) - parseInt(unitPrice)

                }

          });
    })


    })