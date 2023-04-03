/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 */
function length_of_longest_substring(arr, k) {
  let maxLength = 0;
  let maxRepeatOnes = 0;
  let windowStart = 0;
  let numFreq = {};

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    numFreq[arr[windowEnd]] = (numFreq[arr[windowEnd]] || 0) + 1;

    maxRepeatOnes = Math.max(maxRepeatOnes, numFreq[arr[windowEnd]]);

    if (windowEnd - windowStart + 1 - maxRepeatOnes > k) {
      numFreq[arr[windowStart]] -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));

console.log(
  length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
