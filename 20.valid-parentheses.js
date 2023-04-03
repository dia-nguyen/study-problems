/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const validPairs = {
      '{': '}',
      '[': ']',
      '(': ')',
    }
    for (let i = 0; i < s.length; i ++) {
      let currChar = s[i];
      if(validPairs[currChar]) {
        stack.push(currChar);
      } else if (currChar === ')' || currChar === '}' || currChar === ']') {
        let poppedChar = stack.pop();
        if(validPairs[poppedChar] !== currChar) return false;
      }
    }
    return stack.length === 0;
};
// @lc code=end

