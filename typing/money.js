var money=parseInt(localStorage.getItem('money'));
if (isNaN(money)) {
  money=0;
}
moneyDisplay.innerHTML=money;
function changeMoney(a) {
  money+=a;
  moneyDisplay.innerHTML=money;
  localStorage.setItem('money',money);
}
