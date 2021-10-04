window.addEventListener ("load", function() {

console.log('hola')
let contador = 1;

const valor = document.querySelector('#valor');

const qty = document.querySelector('input[name="qty"]');
const qtyB = document.querySelector('input[name="qtyB"]');
const botones = document.querySelectorAll('.voton');

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
})
