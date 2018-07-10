/**
 *
 * Balanced Delimiters
 *
 * @param {string} exp
 * @return {boolean}
 */

function balancedDelimiters(exp) {
  let brackets = exp.split("");
  let matches = new Map([["(", ")"], ["{", "}"], ["[", "]"]]);
  let stack = [];
  let balanced = true;

  for (let bracket of brackets) {
    switch (bracket) {
      case "(":
      case "{":
      case "[":
        stack.push(matches.get(bracket));
        balanced = false;
        break;
      case ")":
      case "}":
      case "]":
        if (stack.length === 0 || bracket !== stack.pop()) return false;
        balanced = true;
        break;
    }
  }

  return balanced && stack.length === 0;
}

// Test
if (require.main === module) {
  console.log(balancedDelimiters("()[]{}")); // true
  console.log(balancedDelimiters("([{}])")); // true
  console.log(balancedDelimiters("([]{})")); // true
  console.log(balancedDelimiters("([)]")); // false
  console.log(balancedDelimiters("([]")); // false
  console.log(balancedDelimiters("[])")); // false
  console.log(balancedDelimiters("([})")); // false
}

module.exports = {
  balancedDelimiters
};
