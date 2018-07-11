/**
 *
 * Two Sum
 *
 * @param {number} arr
 * @param {number} target
 * @return {number[]} - two numbers 
 */

function fibonacciLite(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fibonacciLite(n - 1, memo) + fibonacciLite(n - 2, memo);
  return memo[n];
}

// Test
if (require.main === module) {
  console.log(fibonacciLite(3)); // 2
  console.log(fibonacciLite(12)); // 144
  console.log(fibonacciLite(30)); // 832040
}

module.exports = {
  fibonacciLite
};
