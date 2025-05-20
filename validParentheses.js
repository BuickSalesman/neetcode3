class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let charMap = { "}": "{", "]": "[", ")": "(" };
    let stack = [];

    for (const c of s) {
      if (c in charMap) {
        if (stack && stack[stack.length - 1] === charMap[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }

    return stack.length === 0;
  }
}
