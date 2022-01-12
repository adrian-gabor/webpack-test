import '../scss/main.scss';

fetch('https://api.github.com/users/adrian-gabor/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, html_url} = repo;
        const repositoryList = document.querySelector('.list--js');
        const myTemplate = `<li> ${name} <a href="${html_url}" title="link do repozytorium ${name} na githubi">link do githuba</a> </li>`;
        repositoryList.innerHTML += myTemplate;
    }
})
.catch(error => {
    console.log('nie udało się pobrać')
})