const toggle = document.querySelector(".toggle");
const articles = document.querySelectorAll('article')

const header = document.querySelector('header')

const search = document.querySelector('.search-query')
const searc = document.querySelector('.form-control')
const form = document.querySelector('#custom-search-input')




const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("miBody");
  header.classList.toggle('header-dark')
  console.log(form)
  searc.style.backgroundColor = 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')';
  form.style.backgroundColor = 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')';


  toggle.checked = true

  articles.forEach(a =>{
    a.classList.toggle('miBody')
})


} else if (currentTheme == "light") {
  document.body.classList.toggle("naranja");
  searc.style.backgroundColor = '#3f51b5';
  form.style.backgroundColor = '#3f51b5';
  toggle.checked = false
}

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    document.body.classList.add("miBody2");
    header.classList.add('header-dark')

    articles.forEach(a =>{
        a.classList.toggle('miBody2')
    })
    searc.style.backgroundColor = 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')';
    form.style.backgroundColor = 'rgb(' + 127 + ',' + 11 + ',' + 151+ ')';
    var theme = document.body.classList.contains("miBody2")
      ? "dark"
      : "light";
  } else {
    document.body.classList.remove("miBody");
    document.body.classList.remove("miBody2");
    header.classList.remove('header-dark')
    searc.style.backgroundColor = '#3f51b5';
    form.style.backgroundColor = '#3f51b5';
    var theme = 'light'

  }
  localStorage.setItem("theme", theme);
});