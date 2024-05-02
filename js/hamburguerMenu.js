const hamburguerButton = document.getElementById("MenuButton");
const hamburguerMenu = document.getElementById("HamburguerMenu");

hamburguerButton.addEventListener("click", ToggleHamburguerMenu)

function ToggleHamburguerMenu(){
    hamburguerButton.classList.toggle("nav__menu-closed");
    hamburguerMenu.classList.toggle("nav__mobile-menu-hidden");
    closed = !closed;
}