 //do nauki
 import '../scss/style.scss';

 const liczba = 20;
 const imie = "elo";

 console.log(`siema i nie nie ma ${liczba} frajerze ${imie}`);


 const heading = document.querySelector('.content__title');
 heading.innerHTML = `siema i nie nie ma ${liczba} frajerze ${imie}`;

$('.content__title').html(`siema i nie nie ma`);


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



