window.addEventListener('load',function(){

    const plus = document.querySelector('.mas')
    const minus = document.querySelector('.menos')
    const number = document.querySelector('.number')
    const price = document.querySelector('.price')

    const unit_price = price.innerHTML / number.innerHTML





    plus.addEventListener("click", function() {
        number.innerHTML++
        price.innerHTML = parseInt(price.innerHTML) + parseInt(unit_price)

      });


    minus.addEventListener("click", function() {
        number.innerHTML--
        price.innerHTML -= unit_price
      });

    })