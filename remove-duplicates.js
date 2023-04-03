"use strict";
/**
 * Remove duplicates in-place from a sorted array of numbers,
 * preserving relative order and using no extra space.
 *
 * @param {number[]} nums - The sorted array of numbers to remove duplicates from
 * @return {number} - The length of the resulting subarray with no duplicates
 *
 * @example
 * const nums = [1, 1, 2, 2, 2, 3, 4, 5, 5, 6];
 * const length = removeDuplicates(nums);
 * console.log(nums); // [1, 2, 3, 4, 5, 6]
 * console.log(length); // 6
 */

function removeDuplicates(nums) {
  let nextNonDuplicateIdx = 1;
  let i = 0;

  while (i < nums.length) {
    if (nums[nextNonDuplicateIdx - 1] !== nums[i]) {
      nums[nextNonDuplicateIdx] = nums[i];
      nextNonDuplicateIdx += 1;
    }
    i += 1;
  }
  return nextNonDuplicateIdx;
}
