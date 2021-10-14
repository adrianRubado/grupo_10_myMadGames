const toggle = document.querySelector(".toggle");
const articles = document.querySelectorAll('article')

const header = document.querySelector('header')


const search = document.querySelector('.form-control')
const form = document.querySelector('#custom-search-input')
const signInForm = document.querySelector('.contenedorFormularioSignIn')

const lunaa = document.querySelector('.lunaa')











const currentTheme = localStorage.getItem("theme")
if (currentTheme == "dark") {
  document.body.classList.toggle("miBody")
  /* signInForm.style.backgroundColor = 'grey' */
  header.classList.toggle('header-dark')
  lunaa.style.color = 'yellow'







  console.log(form)
  search.style.backgroundColor = '#8a3b3b' /* 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')'; */
  form.style.backgroundColor = '#8a3b3b'  /* 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')'; */




  toggle.checked = true

  articles.forEach(a =>{
    a.classList.toggle('miBody')
})


} else if (currentTheme == "light") {
  document.body.classList.toggle("naranja");
  /* signInForm.classList.toggle('azul') */
  search.style.backgroundColor = '#3f51b5';
  form.style.backgroundColor = '#3f51b5';
  toggle.checked = false
  lunaa.style.color = 'white'
}

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    document.body.classList.add("miBody2");
    /* signInForm.classList.toggle('miBody2') */
    header.classList.add('header-dark')


    articles.forEach(a =>{
        a.classList.toggle('miBody2')
    })
    lunaa.style.color = 'yellow'
    search.style.backgroundColor = '#8a3b3b'       /* 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')'; */
    form.style.backgroundColor = '#8a3b3b'/* 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')'; */
    var theme = document.body.classList.contains("miBody2")
      ? "dark"
      : "light";
  } else {
    document.body.classList.remove("miBody");
    document.body.classList.remove("miBody2");
    /* signInForm.classList.remove('miBody')
    signInForm.classList.remove('miBody2') */
    header.classList.remove('header-dark')
    search.style.backgroundColor = '#3f51b5';
    form.style.backgroundColor = '#3f51b5';
    lunaa.style.color = 'white'
    var theme = 'light'

  }
  localStorage.setItem("theme", theme);
});