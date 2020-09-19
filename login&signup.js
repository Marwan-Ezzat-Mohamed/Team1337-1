let members = [
  {
    username: 'user',
    password: '123',
  },
];
let admins = [
  {
    username: 'admin',
    password: '123',
  },
];
let currentUser = 'Guest';
localStorage.setItem('cUser', currentUser);

function loginCheck() {
  let user = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  };
  console.log(user.username, user.password);
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
  let member = false,
    admin = false,
    memberIndex,
    adminIndex;
  for (let i = 0; i < members.length; i++) {
    if (
      user.username == members[i].username &&
      user.password == members[i].password
    ) {
      member = true;
      memberIndex = i;
      break;
    }
  }

  if (!member && !admin) {
    alert('Username or password is incorrect');
    return;
  } else if (admin && !member) {
    currentUser = admins[adminIndex].username;
    window.location = 'admin.html';
  } else {
    currentUser = members[memberIndex].username;
    localStorage.setItem('cUser', currentUser);
    window.location = 'index.html';
  }
}

function signUpCheck() {
  let user = {
    username: document.getElementById('newUsername').value,
    password: document.getElementById('newPassword').value,
    confirmPassword: document.getElementById('confirmPassword').value,
  };
  console.log(user);
  let found = 0;

  for (let i = 0; i < members.length; i++) {
    if (user.username == members[i].username) {
      found = 1;
    }
  }
  if (found) {
    alert('Username already exits');
    return;
  }
  if (user.confirmPassword != user.password) {
    alert('Password do not match');
    return;
  }

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

  currentUser = user.username;
  localStorage.setItem('cUser', currentUser);
  members.push({ username: user.username, password: user.password });

  let members_streialized = JSON.stringify(members);
  localStorage.setItem('members', members_streialized);

  window.location = 'index.html';
  return;
}
function updateMembers() {
  members = JSON.parse(localStorage.getItem('members'));
}
function getUser() {
  document.getElementById('currUserName').innerHTML = localStorage.getItem(
    'cUser'
  );
}
