/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * You can assume that K is less than or equal to the length of the given string.
 *
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 */

function longest_substring_with_k_distinct(str, k) {
  let maxLength = 0;
  let letterFreq = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    letterFreq[str[windowEnd]] = (letterFreq[str[windowEnd]] || 0) + 1;

    while (Object.keys(letterFreq).length > k) {
      letterFreq[str[windowStart]] -= 1;
      if (letterFreq[str[windowStart]] === 0)
        delete letterFreq[str[windowStart]];
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
