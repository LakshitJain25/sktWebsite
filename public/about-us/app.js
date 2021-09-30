const hamburgerBtn = document.querySelector('.hamburger-btn')
const navbar = document.querySelector('header .header-1 .navbar')
hamburgerBtn.addEventListener('click', function () {
    navbar.classList.toggle('navbar-toggle')

})

document.addEventListener('scroll', () => {
    navbar.classList.remove('navbar-toggle')

})



