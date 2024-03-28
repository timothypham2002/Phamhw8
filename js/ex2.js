function getUserInfo() {
  const login = document.getElementById('login').value;
  const url = `https://api.github.com/users/${login}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('avatar').innerHTML = `<img src="${data.avatar_url}" alt="Profile Picture" width="150">`;
      document.getElementById('name').innerText = data.name || 'N/A';
      document.getElementById('blog').innerText = data.blog || 'N/A';
      document.getElementById('created_at').innerText = data.created_at ? new Date(data.created_at).toDateString() : 'N/A';
    })
    .catch(err => {
      console.error(err.message);
    });
}
