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
  if (
    (user.username == null && user.password == null) ||
    (user.username == '' && user.password == '')
  ) {
    alert('Username and Password are required');
    return;
  }
  if (user.username == null || user.username == '') {
    alert('Username is required');
    return;
  }
  if (user.password == null || user.password == '') {
    alert('Password is required');
    return;
  }
  for (let i = 0; i < members.length; i++) {
    if (
      user.username == members[i].username &&
      user.password == members[i].password
    ) {
      found = 1;
    }
  }
  if (!found) {
    alert('Username or password is incorrect');
    return;
  } else window.location = 'index.html';
}
