import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('form-repo');
        this.listEl = document.getElementById('list-repo');

        this.registerHandlers();
    }

    async addRepository(event) {

        event.preventDefault();

        const inputEl = document.querySelector('input[name="repo"]');

        if (!inputEl.value) return;

        try {
            const response = await api.get(`/repos/${inputEl.value}`);
            const { name, description = 'Hello world.', html_url, owner: { avatar_url }} = response.data;
            console.log(response)
    
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            })
    
            this.render();

        } catch (error) {
            alert("This repo does not exist.")
        }
    }

    registerHandlers() {

        this.formEl.onsubmit = event => this.addRepository(event);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {

            let linkEl = document.createElement('a');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.setAttribute('target', '_blank');

            let titleEl = document.createElement('strong');
            let descEl = document.createElement('p');

            let avatarEl = document.createElement('img');
            avatarEl.setAttribute('src', repo.avatar_url);
    
            linkEl.append(document.createTextNode('Access'));
            titleEl.append(document.createTextNode(repo.name));
            descEl.append(document.createTextNode(repo.description));

            let repoEl = document.createElement('li');

            repoEl.appendChild(avatarEl)
            repoEl.appendChild(titleEl)
            repoEl.appendChild(descEl)
            repoEl.appendChild(linkEl)

            this.listEl.appendChild(repoEl);
            
        })



    }
}

new App;