console.log('hola')
let contador = 0;

const valor = document.querySelector('#valor');

const botones = document.querySelectorAll('.voton');

botones.forEach(boton => {
    boton.addEventListener('click', function (e){
        
        const estilos = e.currentTarget.classList;

        if (estilos.contains('quitar')) {
            contador--;
        } 
        else if (estilos.contains('agregar')) {
            contador++;
        }
        valor.textContent = contador;
    })
})

