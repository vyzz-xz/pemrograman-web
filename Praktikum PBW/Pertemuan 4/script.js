// fibo: 0 1 1 2 3 5 8 13 ....

let x = 0;
let y = 1;
let res;

function printFibo() {
  let n = prompt("Silakan input n: ");

  // logic fibonacci
  let i = 1;
  while (i <= n) {
    console.log(x);
    res = x + y;
    x = y;
    y = res;
    i++;
  }
}
