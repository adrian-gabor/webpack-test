import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js')
    nav.classList.toggle('navigation--open')
})

const dark = document.querySelector('.dark--js')
let isDark = false
dark.addEventListener('click', () => {
    if (isDark == false) {
        document.documentElement.style.setProperty('--backgorund', '#00111C')
        document.documentElement.style.setProperty('--plump-purple', '#ffffff')
        document.documentElement.style.setProperty('--true-blue', '#002945')
        document.documentElement.style.setProperty('--maximum-blue-green', '#00406C')
        document.documentElement.style.setProperty('--platinum', '#001A2C')
        document.documentElement.style.setProperty('--fiery-rose', '#001A2C')
        isDark = true
    } else {
        document.documentElement.style.setProperty('--backgorund', '#FFF3B0')
        document.documentElement.style.setProperty('--plump-purple', '#101935')
        document.documentElement.style.setProperty('--true-blue', '#101935')
        document.documentElement.style.setProperty('--maximum-blue-green', '#D6E3F8')
        document.documentElement.style.setProperty('--platinum', '#ebebebff')
        document.documentElement.style.setProperty('--fiery-rose', '#564787')
        isDark = false
    }
})
