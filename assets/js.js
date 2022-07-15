var menu = document.querySelector(".nav ul")
var menu_btn = document.querySelector(".menu-toggle img")
var items = document.querySelectorAll(".nav ul li a")
menu_btn.addEventListener('click',function(){
    menu.classList.toggle("show")
})
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click',function(){
        menu.classList.toggle("show")
    });
    
}
function scrollHeader(){
    const nav = document.querySelector('.header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)