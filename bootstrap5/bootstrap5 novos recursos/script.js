const inputDarkMode = document.querySelector('#modoNoturno')
const elemento = document.querySelector('body')

inputDarkMode.addEventListener('click', () =>{
const modo = inputDarkMode.checked ? "dark" : "light"
    elemento.setAttribute("data-bs-theme", modo)
})
