/**
 * Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */
const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0;
  let sum = 0;
  let windowStart = 0;

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    sum += arr[windowEnd]

    if (windowEnd >= k -1) {
      maxSum = Math.max(maxSum, sum);
      console.log(maxSum)
      sum -= arr[windowStart]
      windowStart += 1;
    }
  }

  return maxSum
};
