import '../scss/main.scss';
import moment from 'moment'
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
const liczba = 20;
const imie = "elo";

console.log(`siema i nie nie ma ${liczba} frajerze ${imie}`);


// const heading = document.querySelector('.content__title');
// heading.innerHTML = `siema i nie nie ma ${liczba} frajerze ${imie}`;

// $('.content__title').html(`siema i nie nie ma`);


const funkcja = (imie, wiek) => {
   console.log(`To ja ${imie} mam ${wiek} lata`);
}

function funkcja1(imie, wiek) {
   console.log(`To ja ${imie} mam ${wiek} lata`);
}

const obiekt = {

funkcja: (imie, wiek) => {
   console.log(`To ja ${imie} mam ${wiek} lata`);
},

funkcja1: function (imie, wiek) {
   console.log(`To ja ${imie} mam ${wiek} lata`);
},

}


funkcja1("asads", 323)
funkcja("asads", 323)

obiekt.funkcja("dae",23)
obiekt.funkcja1("wedw",434)

const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js')
    nav.classList.toggle('navigation--open')
})
// do poprawek ide spać
var tImg = ["/img/off.png", "/img/on.png"];      
var vImg = true;
function fSetImg(){
    if (vImg){
        document.getElementById('iImg').src = tImg[1];
        vImg = false;
    }
    
    else {
        document.getElementById('iImg').src = tImg[0];
        vImg = true;
    }
}

const dark = document.querySelector('.dark--js')
let isDark = false
dark.addEventListener('click', () => {
    if (isDark == false) {
        document.documentElement.style.setProperty('--ui0', '#F0F1F3')
        document.documentElement.style.setProperty('--ui1', '#000000')
        document.documentElement.style.setProperty('--ui2', '#232735')
        document.documentElement.style.setProperty('--ui3', '#A1A4B1')
        document.documentElement.style.setProperty('--ui4', '#3E465F')
        document.documentElement.style.setProperty('--text', '#FFFFFF')
        document.documentElement.style.setProperty('--text2', '#505565')
        document.documentElement.style.setProperty('--text3', '#8B90A0')
        document.documentElement.style.setProperty('--text-inverse', '#232735')
        document.documentElement.style.setProperty('--backgorund', '#232735')
        document.documentElement.style.setProperty('--hover', '#EEEEF1')
        document.documentElement.style.setProperty('--hover1', '#3E465F')
        isDark = true
        fSetImg()
    } else {
        document.documentElement.style.setProperty('--ui0', '#000000')
        document.documentElement.style.setProperty('--ui1', '#232735')
        document.documentElement.style.setProperty('--ui2', '#A1A4B1')
        document.documentElement.style.setProperty('--ui3', '#D3D4D8')
        document.documentElement.style.setProperty('--ui4', '#F0F1F3')
        document.documentElement.style.setProperty('--text', '#232735')
        document.documentElement.style.setProperty('--text2', '#505565')
        document.documentElement.style.setProperty('--text3', '#8B90A0')
        document.documentElement.style.setProperty('--text-inverse', '#FFFFFF')
        document.documentElement.style.setProperty('--backgorund', '#FFFFFF')
        document.documentElement.style.setProperty('--hover', '#3E465F')
        document.documentElement.style.setProperty('--hover1', '#EEEEF1')
        isDark = false
        fSetImg()
    }
})
console.log(moment().startOf('day').fromNow());

