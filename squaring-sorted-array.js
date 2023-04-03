"use strict";
/**
 * Given a sorted array, creates a new array containing the squares of
 * all the numbers in the input array in sorted order.
 *
 * @param {number[]} nums - The sorted array of numbers to square
 * @return {number[]} - A new array containing the squares of all the numbers in the input array, sorted in ascending order
 *
 * @example
 * const nums = [-2, -1, 0, 2, 3];
 * const result = squareSortedArray(nums);
 * console.log(result); // [0, 1, 4, 4, 9]
 */
function squareSortedArray(nums) {
  let sorted = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      sorted.unshift(nums[left] ** 2);
      left++;
    } else {
      sorted.unshift(nums[right] ** 2);
      right--;
    }
  }
  return sorted;
}

const nums = [-2, -1, 0, 2, 3];
const result = squareSortedArray(nums);
console.log(result); // [0, 1, 4, 4, 9]
