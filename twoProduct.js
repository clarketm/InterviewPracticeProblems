/**
 *
 * Two Product
 *
 * @param {number} arr
 * @param {number} target
 * @return {number[]} - two numbers
 */

function twoProduct(arr, target) {
  let products = new Set();

  for (let n of arr) {
    if (products.has(n)) return [n, target / n];
    products.add(target / n);
  }
}

// Test
if (require.main === module) {
  console.log(twoProduct([1, 5, 3, 8, 9, 2, 6], 12)); // [6, 2]
  console.log(twoProduct([1, 5, 3, 8, 9, 2, 6], 24)); // [8, 3]
}

module.exports = {
  twoProduct
};
