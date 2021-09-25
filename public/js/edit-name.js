window.addEventListener("load" , () => { 

let namePlatform = document.querySelector("h3 .platformName")

let inputPlatform = document.querySelectorAll("input .platformInput")

inputPlatform.addEventListener("click", (e) => {   


namePlatform.innerTXT =+ e.value


})





})