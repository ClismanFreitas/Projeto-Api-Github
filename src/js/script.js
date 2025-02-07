import {api} from  "./services/urls.js"
import {screen} from  "./objects/screen.js"

const botaoBusca = document.getElementById('btn-search');
const digitado = document.getElementById('input-search');

async function buscarUsuario() {
   const userName = digitado.value.trim();

   if (userName === '') {
      document.querySelector('.profile-data').innerHTML = `<h2>Usuário não existe</h2>`;
      return;
   }

   const userResponse = await fetch(api.user(userName));
   const user = await userResponse.json();

   const reposResponse = await fetch(api.repo(userName));
   const repos = await reposResponse.json();

   const eventsResponse = await fetch(api.events(userName));
   const events = await eventsResponse.json();

   screen.renderUser(user, repos, events)
}

botaoBusca.addEventListener('click', buscarUsuario);
digitado.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
      buscarUsuario();
   }
});