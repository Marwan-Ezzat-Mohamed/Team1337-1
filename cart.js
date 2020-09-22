let Totalprice = 0;
let quantity = [];
let countOfitem = [];

let cart;

function OpenTheCart() {
  quantity = JSON.parse(localStorage.getItem('quantityArray'));
  Totalprice = JSON.parse(localStorage.getItem('totalprice'));
  countOfitem = JSON.parse(localStorage.getItem('countOfitem'));

  let key = '';
  let list =
    '<tr class="output"><th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order</th><th>Price</th><th>Quantity</th></tr>\n';
  let i = 0;
  for (i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    if (
      key == 'quantityArray' ||
      key == 'cUser' ||
      key == 'members' ||
      key == 'totalprice' ||
      key == 'countOfitem' ||
      key == 'background-color' ||
      key == 'bgColor'
    )
      continue;
    console.log(localStorage.getItem(key), quantity[localStorage.getItem(key)]);
    list +=
      '<tr><td>' +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
      key +
      '</td>\n<td>' + '&nbsp;&nbsp;' +
      localStorage.getItem(key) +
      '</td>\n<td>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
      quantity[localStorage.getItem(key)] +
      '</td></tr>\n';
  }
  if (list == '<tr class="output"><th>Order</th><th>Price</th></tr>\n') {
    list +=
      '<tr class="output"><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n';
  }
  document.getElementById('list').innerHTML = list;
}
function addtocart(TypeOfFood, price) {
  if (localStorage.getItem('quantityArray') != null)
    quantity = JSON.parse(localStorage.getItem('quantityArray'));
  if (localStorage.getItem('totalprice') != null)
    Totalprice = JSON.parse(localStorage.getItem('totalprice'));
  if (localStorage.getItem('countOfitem') != null)
    countOfitem = JSON.parse(localStorage.getItem('countOfitem'));

  if (localStorage.getItem(TypeOfFood) == null) {
    localStorage.setItem(TypeOfFood, price);
    Totalprice += price;
    quantity[price] = 1;
    countOfitem[price] = 1;
  } else if (localStorage.getItem(TypeOfFood) != null) {
    countOfitem[price]++;
    Totalprice += price;
    quantity[price] = countOfitem[price];
  }
  let quantity_sterialized = JSON.stringify(quantity);
  let totalPrice_sterialized = JSON.stringify(Totalprice);
  let countOfitem_sterialized = JSON.stringify(countOfitem);
  localStorage.setItem('quantityArray', quantity_sterialized);
  localStorage.setItem('totalprice', totalPrice_sterialized);
  localStorage.setItem('countOfitem', countOfitem_sterialized);
  alert('Item has been addded to your cart');
}
function ClearAll() {
  Totalprice = 0;
  localStorage.clear();
  document.getElementById('list').innerHTML = Totalprice;
}
function TotalPrice() {
  Totalprice = JSON.parse(localStorage.getItem('totalprice'));
  document.getElementById('list').innerHTML = Totalprice;
}

function goToHome() {
  window.location = 'index.html';
}
function goToLogin() {
  window.location = 'login.html';
}
function goToPayment() {
  window.location = 'paymentBycredit.html';
}
