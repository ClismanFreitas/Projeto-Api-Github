import { renderRepos } from "./repositorio.js";
import { renderEvents } from "./eventos.js";
const screen = {
   profileUser: document.querySelector('.profile-data'),

   renderUser(user, repos, events) {
       const followers = user.followers;
       const following = user.following;

       this.profileUser.innerHTML = `
        <div class="info">
           <img src="${user.avatar_url}" alt="Foto de perfil do usuário"/>
             <div class="data">
                  <h1>${user.name ?? 'Este usuário não possui Nome'}</h1>
                  <p>${user.bio ?? 'Este usuário não possui Bio'}</p>
              </div>
        </div>
        <div class="profile-follower">
            <div class="follow-group">
                <p class="follow">👥 Followers</p>
                <p class="numero-follow">${followers}</p>
            </div>
            <div class="follow-group">
                <p class="follow">👥 Following</p>
                <p class="numero-follow">${following}</p>
            </div>
        </div>`;
      renderRepos(this.profileUser, repos)
      renderEvents(this.profileUser, events)
   }    
};

export { screen };
