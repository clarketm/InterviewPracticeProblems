/**
 *
 * Factorial of N
 *
 * @param {number} n
 * @return {number}
 */

function factorial(n, memo = {}) {
  if (n === 0) return 1;
  if (memo[n]) return n * memo[n];

  memo[n] = n * factorial(n - 1);
  return memo[n];
}

/**
 *
 * Factorial of N (tail-recursive)
 *
 * - Termination statement must not be an expression
 * - Termination statement should be the last call in the function
 *
 * @param {number} n
 * @return {number}
 */

function factorialTailRecursive(n, acc = 1, memo = {}) {
  if (n <= 1) return acc;
  if (memo[n]) return memo[n];

  memo[n] = factorialTailRecursive(n - 1, n * acc);
  return memo[n];
}

// Test
if (require.main === module) {
  console.log(factorial(3)); // 6
  console.log(factorial(7)); // 5040
  ////////////////////
  console.log(factorialTailRecursive(3)); // 6
  console.log(factorialTailRecursive(7)); // 5040
}

module.exports = {
  factorial
};
