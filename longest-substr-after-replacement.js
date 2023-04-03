/**
 * Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
 * find the length of the longest substring having the same letters after replacement.
 *
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 */

function length_of_longest_substring(str, k) {
  let maxLength = 0;
  let maxRepeatCharCount = 0;
  let charFreq = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    charFreq[str[windowEnd]] = (charFreq[str[windowEnd]] || 0) + 1;

    maxRepeatCharCount = Math.max(maxRepeatCharCount, charFreq[str[windowEnd]]);

    if (windowEnd - windowStart + 1 - maxRepeatCharCount > k) {
      charFreq[str[windowStart]] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
