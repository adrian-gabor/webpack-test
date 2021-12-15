import '../scss/main.scss';
import '../scss/another.scss';
console.log('hello another');

const textarea = document.querySelector('.textarea--js')
const load = document.querySelector('.load--js')
const save = document.querySelector('.save--js')



load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry')
})

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textarea.value)
})