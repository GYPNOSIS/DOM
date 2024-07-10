`use strict`

document.addEventListener(('DOMContentLoaded'), ()=>
    {
        
    let drama = document.querySelector('#drama');

drama.textContent = 'COMEDY'

const img = document.querySelectorAll(".promo__adv img")

img.forEach(e => 
    {
    e.remove()
})


let back = document.querySelector('#promo')


back.style.background = 'url("../img/1.jpg") bottom no-repeat'

const newLi = document.querySelectorAll('.promo__interactive-item')
})