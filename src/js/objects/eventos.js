function renderEvents(profileUser, events) {
    let eventosHTML = "";
       events.forEach(event => {
           if (event.type === 'PushEvent') {
               let pushMessage = `<h2>🚀 PushEvent detectado no repositório: ${event.repo.name}</h2><ul>`;

               event.payload.commits.forEach(commit => {
                   pushMessage += `<li>📌 Mensagem do commit: ${commit.message}</li>`;
               });

               pushMessage += `</ul>`;
               eventosHTML += pushMessage;
           }
           if (event.type === 'CreateEvent') {
               eventosHTML += `<h2> 🆕 Sem mensagem de commit</h2>`;
           }
       });

       if (events.length === 0) {
           eventosHTML = `<h3>Sem eventos recentes para esse usuário 😢</h3>`;
       }

       profileUser.innerHTML += eventosHTML;
   }

   export {renderEvents}
