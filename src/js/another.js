import '../scss/main.scss';
console.log('hello another');

const textarea = document.querySelector('.form_item--js')
const load = document.querySelector('.load--js')
const save = document.querySelector('.save--js')



load.addEventListener('click', () => {
    textarea.value = localStorage.getItem('entry')
})

save.addEventListener('click', () => {
    localStorage.setItem('entry', textarea.value)
})