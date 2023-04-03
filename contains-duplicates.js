/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * Input: nums= [1, 2, 3, 4]
 * Output: false
 * Explanation: There are no duplicates in the given array.
 **/
function containsDuplicate(nums) {
  let numFreq = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numFreq) {
      return true;
    } else {
      numFreq[nums[i]] = 1;
    }
  }

  return false;
}
