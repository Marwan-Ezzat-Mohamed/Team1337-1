// Tabbed Menu
function openMenu(eventt, menuName) {
  let i, x;
  x = document.getElementsByClassName('menu');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById(menuName).style.display = 'block';
}
if(is_changed===true)
document.body.style.background = 'grey';