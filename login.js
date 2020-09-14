let members = [
  {
    username: 'user',
    password: '123',
  },
  {
    username: 'admin',
    password: '123',
  },
];
function loginCheck() {
  let user = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  };
  console.log(user.username, user.password);
  let found = 0;
  for (let i = 0; i < members.length; i++) {
    if (
      user.username == members[i].username &&
      user.password == members[i].password
    ) {
      found = 1;
    }
  }
  if (!found) {
    alert('username or password incorrect');
    return;
  } else window.location = 'index.html';
}
