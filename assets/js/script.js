// function toggle() {
//     var header = document.querySelector("#header")
//     header.classList.toggle('active1')
// }
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}