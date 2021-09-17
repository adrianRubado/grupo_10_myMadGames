const toggle = document.querySelector(".toggle");
const articles = document.querySelectorAll('article')


const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("miBody");
  toggle.checked = true

  articles.forEach(a =>{
    a.classList.toggle('miBody')
})


} else if (currentTheme == "light") {
  document.body.classList.toggle("naranja");
  toggle.checked = false
}

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    document.body.classList.add("miBody2");

    articles.forEach(a =>{
        a.classList.toggle('miBody2')
    })
    var theme = document.body.classList.contains("miBody2")
      ? "dark"
      : "light";
  } else {
    document.body.classList.remove("miBody");
    document.body.classList.remove("miBody2");
    var theme = 'light'

  }
  localStorage.setItem("theme", theme);
});