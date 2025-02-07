function renderRepos(profileUser, repos){
    let repositoriesItens = '';
       repos.forEach(repo => {
           repositoriesItens += `<li>
        <a href="${repo.html_url}" target="_blank">
           <strong>${repo.name}</strong>
           <div>
              <ul class="info-repo">
                  <li>⭐ ${repo.stargazers_count}</li>
                  <li> 🍴 ${repo.forks_count}</li>
                  <li>  👀 ${repo.watchers_count}</li>
                  <li> 👩‍💻 ${repo.language}</li>
              </ul>
           </div>
        </a>
     </li>`;
       });

       if (repos.length > 0) {
           profileUser.innerHTML += `
     <div class="repositories section">
         <h2>Repositórios</h2>
          <ul>${repositoriesItens}</ul>
          <h1>Eventos</h1>
    </div>`;
       } else {
           profileUser.innerHTML += '<p>Este usuário não possui repositórios públicos.</p>';
       }
}

export {renderRepos}