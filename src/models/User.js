class User {
  constructor() {
    const BASE_URL = 'https://api.github.com'
  }

  fetchUser(user) {
    fetch(`${BASE_URL}/users/${user}/repos`)
      .then(result => {
        console.log(result);
      })
  }
}

module.exports = User;
