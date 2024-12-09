function recursion(n) {
  if (n == 0) return 1;
  return n * recursion(n - 1);
}

function fibonacii(n) {
  // fibo(n) = fibo(n-1) + fibo(n-2)
  if (n == 1 || n == 2) return 1;
  return fibonacii(n - 1) + fibonacii(n - 2);
}

function permutation(n) {
    let b = [], x = []
  for (let i = 1; i <= n; i++) {
    if (b[i]) {
      x[k] = i;
      if (k == n) {
        console.log(x, n);
      } else {
        b[i] = false;
        permutation(k + 1, n);
        b[i] = true;
      }
    }
  }
}

console.log(recursion(3));
console.log(fibonacii(4));
