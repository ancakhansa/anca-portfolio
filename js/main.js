// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

}
window.onscroll = () => {
 // remove toogle icon
menuIcon.classList.remove('bx-x')
menuIcon.classList.remove('active')
}

// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Student At IDN', 'RPL major', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

