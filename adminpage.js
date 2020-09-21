localStorage.setItem('background-color', document.getElementById('dark').value);
console.log(document.getElementById('dark').value);
function darkMode() {
  localStorage.setItem(
    'background-color',
    document.getElementById('dark').value
  );
  //localStorage.bgColor = localStorage.getItem('background-color');
  if (localStorage.getItem('background-color') == 2) {
    document.getElementById('header').style.cssText =
      'color:#fff;background:#333;';
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('background-color', 1);
  } else {
    document.getElementById('header').style.cssText =
      'color:#000000;background:#fff;';
    document.getElementById('content').style.cssText =
      'color:#000000;background:f0f1f6;blockColor:#f0f1f6;';
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('background-color', 2);
  }
}
function logOut() {
  window.location = 'login.html';
}
