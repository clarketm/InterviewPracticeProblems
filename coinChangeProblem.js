/**
 *
 * Coin Change Problem (recursive)
 *
 * @param {number} n – # of units
 * @param {number[]} S – coin types
 * @return {number}
 */

function coinChangeRecursive(n, S) {
  function count(n, m) {
    if (n < 0) return 0;
    if (m <= 0 && n >= 1) return 0;
    if (n === 0) return 1;

    // Solutions that do not contain S(m) (i.e. the mth coin)
    let a = count(n, m - 1);

    // Solutions that contain at least one S(m) (i.e. the mth coin)
    let b = count(n - S[m - 1], m);

    return a + b;
  }

  return count(n, S.length);
}

/**
 *
 * Coin Change Problem (iterative)
 *
 * @param {number} n – # of units
 * @param {number[]} S – coin types
 * @return {number}
 */

function coinChangeIterative(n, S) {
  let dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;

  for (let coin of S) {
    for (let i = 1; i < dp.length; i++) {
      if (i >= coin) {
        dp[i] += dp[i - coin];
      }
    }
  }

  return dp[n];
}

/**
 *
 * Coin Change Problem (min # of coins)
 *
 * @param {number} n – # of units
 * @param {number[]} S – coin types
 * @return {number}
 */

function minimumCoins(n, S) {
  let dp = Array.from({ length: n + 1 }, () => n + 1);
  dp[0] = 0;

  for (let coin of S) {
    for (let i = 1; i < dp.length; i++) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[n];
}

// Test
if (require.main === module) {
  console.log(coinChangeRecursive(4, [1, 2, 3])); // 4
  console.log(coinChangeRecursive(10, [2, 5, 3, 6])); // 5
  console.log(coinChangeRecursive(0, [2, 5, 3, 6])); // 1
  console.log(coinChangeRecursive(2, [1, 2])); // 2
  console.log(coinChangeRecursive(100, [1, 2, 3])); // 884
  console.log(coinChangeRecursive(100, [3, 2, 1])); // 884
  ////////////////////
  console.log(coinChangeIterative(4, [1, 2, 3])); // 4
  console.log(coinChangeIterative(10, [2, 5, 3, 6])); // 5
  console.log(coinChangeIterative(0, [2, 5, 3, 6])); // 1
  console.log(coinChangeIterative(2, [1, 2])); // 2
  console.log(coinChangeIterative(100, [1, 2, 3])); // 884
  console.log(coinChangeRecursive(100, [3, 2, 1])); // 884
  ////////////////////
  console.log(minimumCoins(11, [1, 2, 5])); // 3
}

module.exports = {
  coinChangeRecursive
};
