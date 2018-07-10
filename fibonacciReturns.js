let memo = {};

/**
 *
 * Fibonacci Returns
 *
 * @param {number} n – nth fibonacci number
 * @return {number}
 */

function fibonacciReturns(nums) {
  let fibs = [];

  function _fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];

    memo[n] = _fib(n - 1, memo) + _fib(n - 2, memo);
    return memo[n];
  }

  for (let n of nums) fibs.push(_fib(n));

  return fibs;
}

// Test
if (require.main === module) {
  console.log(fibonacciReturns([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
}

module.exports = {
  fibonacciReturns
};
