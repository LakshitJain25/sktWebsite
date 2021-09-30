const hamburgerBtn = document.querySelector('.hamburger-btn')
const navbar = document.querySelector('header .header-1 .navbar')
hamburgerBtn.addEventListener('click', function () {
    navbar.classList.toggle('navbar-toggle')

})

document.addEventListener('scroll', () => {
    navbar.classList.remove('navbar-toggle')

})


const bigImage = document.querySelector('.hero .hero-container .product-images .big-images img')
const smallImage = document.querySelectorAll('.hero .hero-container .product-images .small-images img')
 
console.log(bigImage, smallImage)
smallImage.forEach(function (e) {
    e.addEventListener('click', () => {
       document.querySelector('.hero .hero-container .product-images .small-images .active').classList.remove('active')
       e.classList.add('active')
       bigImage.setAttribute('src',`../pics/posters/${e.getAttribute('data-image')}.png`)

    })
})


