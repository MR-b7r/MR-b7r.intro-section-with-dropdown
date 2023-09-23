const dropDown = document.querySelectorAll(".dropdown")
const featuresA = document.querySelector(".features-a")
const companyA = document.querySelector(".company-a")
const arrowImg = document.querySelector(".arrow-img")

const headerNav = document.querySelector(".header-nav")
const overlay = document.querySelector(".overlay")
const mobMenu = document.querySelector(".mob-container img")

companyA.addEventListener('click', function() {
    companyA.closest(".dropdown").classList.toggle("hidden")
    if(companyA.closest(".dropdown").classList.contains("hidden")) {
        companyA.nextElementSibling.src = "assets/images/icon-arrow-down.svg"
    }
    else {
        companyA.nextElementSibling.src = "assets/images/icon-arrow-up.svg"

    }

})
featuresA.addEventListener('click', function() {
    featuresA.closest(".dropdown").classList.toggle("hidden")
    if(featuresA.closest(".dropdown").classList.contains("hidden")) {
        featuresA.nextElementSibling.src = "assets/images/icon-arrow-down.svg"
    }
    else {
        featuresA.nextElementSibling.src = "assets/images/icon-arrow-up.svg"

    }

})

mobMenu.addEventListener("click", function() {
    headerNav.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    if(headerNav.classList.contains('hidden') && overlay.classList.contains('hidden')) {
        mobMenu.src = "assets/images/icon-menu.svg"
    }
    else {
        mobMenu.src = "assets/images/icon-close-menu.svg"
    }
})
