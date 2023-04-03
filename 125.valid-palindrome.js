/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = filteredStr.length - 1;

    while (left < right) {
      if(filteredStr[left] !== filteredStr[right]) return false
      left ++;
      right --;
    }
    return true;
};

// @lc code=end

