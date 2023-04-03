/**
 * Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray
 * whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.
 */
const smallest_subarray_sum = function(s, arr) {
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd]

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  if (minLength === Infinity) return 0;
  return minLength;
};
