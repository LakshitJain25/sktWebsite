const hamburgerBtn = document.querySelector('.hamburger-btn')
const navbar = document.querySelector('header .header-1 .navbar')
const ocaMachinesCardContainer = document.querySelector('.oca-machines .product-cards-container')
hamburgerBtn.addEventListener('click', function () {
    navbar.classList.toggle('navbar-toggle')

})

document.addEventListener('scroll', () => {
    navbar.classList.remove('navbar-toggle')

})
const machineObj = document.querySelector('.hero-container-image')
const phoneObj = document.querySelector('.phone-image')
const TIMER = setInterval(changer, 0)

function changer() {
    if (machineObj.getBoundingClientRect().left < phoneObj.getBoundingClientRect().left - 100) {
        phoneObj.setAttribute('src', 'pics/fixed.png')
    }
    else {
        phoneObj.setAttribute('src', 'pics/broken.png')
    }
}


const allProductCards = 
{

ocaMachines:[
    {
        heading : "SKT 2020 PRO OCA LAMINATION MACHINE SET",
        image:"pics/posters/1.png",
        price:"₹99,999.00"
    },
    {
        heading : "SKT 002 OCA LAMINATION MACHINE SET (YMJ TECHNOLOGY)",
        image:"pics/posters/2.png",
        price:"₹64,999.00"
    },
    {
        heading : "SKT 2100 OCA LAMINATION MACHINE SET",
        image:"pics/posters/3.png",
        price:"₹58,999.00"
    },
    {
        heading : "SKT 007 OCA LAMINATION MACHINE SET",
        image:"pics/posters/4.png",
        price:"₹74,999.00"
    },
    {
        heading : "SKT 9688 OCA LAMINATION MACHINE SET",
        image:"pics/posters/5.png",
        price:"₹59,999.00"
    },
    {
        heading : "SKT-003 OCA LAMINATION MACHINE SET",
        image:"pics/posters/6.png",
        price:"₹54,999.00"
    },
    {
        heading : "SKT 001 OCA LAMINATION MACHINE SET",
        image:"pics/posters/7.png",
        price:"₹49,999.00"
    },
    {
        heading : "SKT 868 OCA LAMINATION MACHINE SET",
        image:"pics/posters/8.png",
        price:"₹39,999.00"
    },
    {
        heading : "SKT G111 (NANO) (World’s Smallest OCA Lamination Machine) COMPLETE SET",
        image:"pics/posters/9.png",
        price:"₹41,999.00"
    }

]

}


displayProductCards(allProductCards)
function displayProductCards(allProductCards){
    Object.values(allProductCards).forEach(function(cardCategory){
        cardCategory.forEach(function(card){
           addProductCard(card)
        })
    })
  
}




function addProductCard(card)
{
    const productCard = `<div class="product-card">
    <div class="product-card-image"><img src=${card.image} alt=""></div>
    <div class="product-card-title">
        <h2>${card.heading}</h2>
    </div>
    <div class="product-card-price">
        <h3>${card.price}</h3>
    </div>
    <div class="product-card-stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <div class="product-card-btn">
        <button class="details-btn"><a href="${card.heading}">DETAILS</a></button>
    </div>
</div>`
    ocaMachinesCardContainer.insertAdjacentHTML('afterbegin',productCard)
}


