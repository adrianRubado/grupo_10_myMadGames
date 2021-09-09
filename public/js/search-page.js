window.addEventListener("load", function() {

    console.log("hola")

    const article = document.querySelector(".individual-game-container")
    const redBubble = document.querySelector(".image-containe")
    
       article.addEventListener("mouseover", function(e) { 

           redBubble.style.backgroudColor = rgba(172, 92, 96, 0.405)

       })





})