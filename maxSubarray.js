/**
 *
 * Max Subarray
 *
 * @param {number} arr
 * @return {number[]}
 */

function maxSubarray(arr) {
  let max = arr[0];
  let curr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    max = Math.max(max, curr);
  }

  return max;
}

// Test
if (require.main === module) {
  console.log(maxSubarray([1, 5, -4, -7, -1, 2, 6])); // 8
  console.log(maxSubarray([1, -5, -3, 8, -9, 2, 7])); // 9
}

module.exports = {
  maxSubarray
};
