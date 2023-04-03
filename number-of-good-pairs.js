/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */
function numGoodPairs(nums) {
  let pairCount = 0;
  const freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
    pairCount += freq[num] - 1;
  }
  return pairCount;
}
