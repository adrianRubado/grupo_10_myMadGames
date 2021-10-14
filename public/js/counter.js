window.addEventListener ("load", function() {

console.log('hola')
let contador = 1;

const valor = document.querySelector('#valor');

const qty = document.querySelector('input[name="qty"]');
const qtyB = document.querySelector('input[name="qtyB"]');
const botones = document.querySelectorAll('.voton');

/* const share = document.querySelector(".obtenerURL"); */

const jart = document.querySelector(".jart");

botones.forEach(boton => {
    boton.addEventListener('click', function (e){
        
        const estilos = e.currentTarget.classList;

        if (estilos.contains('quitar')) {
            if (contador > 1){
                    contador--;
                }
        } 
        else if (estilos.contains('agregar')) {
            if (contador < 10){
                contador++;
            }
        }
        valor.textContent = contador;
        qty.value = contador;
        qtyB.value = contador;
    })
})




/* share.addEventlistener('click', function (){
    
    console.log("HELLO WORLD");

    var sURL = window.location.href;
        sTemp = "<input id=\"copy_to_Clipboard\" value=\"" + sURL + "\" />"
        $("body").append(sTemp);
        $("#copy_to_Clipboard").select();
        document.execCommand("copy");
        $("#copy_to_Clipboard").remove();  
}) */


/* var URLactual = window.location.href;
document.execCommand("copy")
alert(URLactual); */

/* var url = window.location.href
function Alerta (){
    alert(url)
    document.execCommand("copy")
}
Alerta() */


/* var url = window.location.href */



/* console.log(share) */
console.log(jart)
})
