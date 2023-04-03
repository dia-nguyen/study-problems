/**
 * Given an array of sorted numbers and a target sum,
 * find a pair in the array whose sum is equal to the given target.
 * @param {[]} arr [1, 2, 3, 4, 6]
 * @param {int} target 6
 * @returns {[]} [1,3]
 */
function targetSum(arr, target) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer2 > pointer1) {
    if (arr[pointer1] + arr[pointer2] === target) {
      return [pointer1, pointer2];
    }

    if (arr[pointer1] + arr[pointer2] > target) {
      pointer2 -= 1;
    } else {
      pointer1 += 1;
    }
  }
  return [-1, -1];
}
