window.addEventListener('load', async function (e) {




    const toggle = document.querySelector('.toggle')
    const articles = document.querySelectorAll('article')

    document.body.classList.toggle(localStorage.getItem('theme'))
    articles.forEach(a =>{
        a.classList.toggle(localStorage.getItem('theme'))
    })



        toggle.checked = this.localStorage.getItem('checked')
        toggle.addEventListener('click',function(e){



       if(toggle.checked){
        const dark = document.body
        dark.classList.toggle('miBody')
        articles.forEach(a =>{
            a.classList.toggle('miBody')
        })
        localStorage.setItem('theme','miBody')
        localStorage.setItem('checked',toggle.checked)
       }

       else
       if(toggle.checked == false){
        localStorage.setItem('theme','naranja')
        localStorage.setItem('checked',toggle.checked)
        const dark = document.body
        dark.classList.toggle('miBody')
        articles.forEach(a =>{
            a.classList.toggle('miBody')
        })
       }





    })










})