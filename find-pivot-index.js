"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  nums = nums.map((s) => Math.abs(s));
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  let half = Math.floor(total / 2);

  let left_sum = 0;
  let right_sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left_sum < half) {
      left_sum += nums[i];
      count++;
      console.log("left_sum", left_sum);
    }
    if (left_sum > half) {
      right_sum += nums[i];
    }
  }
  console.log("count", count);
  return right_sum === left_sum ? count - 1 : -1;
};

// let nums = [1, 7, 3, 6, 5, 6];
let nums = [-1, -1, -1, -1, -1, 0];
pivotIndex(nums);
