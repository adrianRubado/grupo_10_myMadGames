window.addEventListener('load', async function (e) {

    const toggle = document.querySelectorAll('.toggle')

    toggle.forEach(t => {
        console.log('holiiii')
        t.addEventListener('click',function(e){
       const dark = document.body
       dark.classList.toggle('miBody')
       const moreDark = document.body.article

    })
})







})