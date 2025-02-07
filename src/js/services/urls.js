const baseUrl = "https://api.github.com/users"

const api = {
    user: (userName) => `${baseUrl}/${userName}`,
    repo: (userName) => `${baseUrl}/${userName}/repos?per_page=10`,
    events: (userName) => `${baseUrl}/${userName}/events`
}

export {api}