"use strict";
/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * Two Sum: Returns array of two numbers from nums array that add up to target num
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  const nums = {};

  for (let i = 0; i < arr.length; i++) {
    let searchNum = target - arr[i];
    if (searchNum in nums) {
      return [nums[target - arr[i]], i];
    }

    nums[arr[i]] = i;
  }
};

// @lc code=end
