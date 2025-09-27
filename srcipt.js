var menuBtn = document.querySelector(".menu-btns")
var menuOverlay = document.querySelector(".menu-overlay")
var menuList = document.querySelector(".menu-list-small")
var cloaseBtn = document.querySelector(".close-btn")

menuBtn.addEventListener("click", function () {
    menuOverlay.style.display = "block"
    menuList.style.display = "block"
})

cloaseBtn.addEventListener("click", function () {
    menuOverlay.style.display = "none"
    menuList.style.display = "none"
})

menuOverlay.addEventListener("click", function () {
    menuOverlay.style.display = "none"
    menuList.style.display = "none"
})
