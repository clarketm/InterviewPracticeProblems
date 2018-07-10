/**
 *
 * Uncoupled Integer (bitwise)
 *
 * @param {number[]} arr
 * @return {number}
 */

function uncoupledIntegerBitwise(arr) {
  return arr.reduce((a, b) => a ^ b);
}

/**
 *
 * Uncoupled Integer (Map)
 *
 * @param {number[]} arr
 * @return {number}
 */

function uncoupledIntegerMap(arr) {
  let countMap = new Map();

  for (let item of arr) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }

  for (let [k, v] of countMap.entries()) {
    if (v === 1) return k;
  }
}

/**
 *
 * Uncoupled Integer (Set)
 *
 * @param {number[]} arr
 * @return {number}
 */

function uncoupledIntegerSet(arr) {
  let countSet = new Set();

  for (let item of arr) {
    if (countSet.has(item)) countSet.delete(item);
    else countSet.add(item);
  }

  return countSet.values().next().value;
}

// Test
if (require.main === module) {
  console.log(uncoupledIntegerBitwise([1, 2, 3, 1, 2])); // 3
  console.log(uncoupledIntegerBitwise([1, 2, 3, 4, 5, 99, 1, 2, 3, 4, 5])); // 99
  /////////////////////////
  console.log(uncoupledIntegerMap([1, 2, 3, 1, 2])); // 3
  console.log(uncoupledIntegerMap([1, 2, 3, 4, 5, 99, 1, 2, 3, 4, 5])); // 99
  /////////////////////////
  console.log(uncoupledIntegerSet([1, 2, 3, 1, 2])); // 3
  console.log(uncoupledIntegerSet([1, 2, 3, 4, 5, 99, 1, 2, 3, 4, 5])); // 99
}

module.exports = {
  uncoupledIntegerBitwise
};
