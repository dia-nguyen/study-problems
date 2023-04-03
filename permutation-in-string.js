/**
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
 * abc
 * acb
 * bac
 * bca
 * cab
 * cba
 * If a string has ‘n’ distinct characters, it will have n! permutations.
 * Input: String="oidbcaf", Pattern="ABC"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 */
function find_permutation(str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let patternLength = pattern.length;
  let letterFreq = {};

  for (let i = 0; i < patternLength; i++) {
    letterFreq[pattern[i]] = (letterFreq[pattern[i]] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];

    if (rightChar in letterFreq) {
      letterFreq[rightChar] -= 1;
      if (letterFreq[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(letterFreq).length) {
      console.log(letterFreq);

      return true;
    }

    if (windowEnd >= patternLength - 1) {
      leftChar = str[windowStart];
      windowStart += 1;

      if (leftChar in letterFreq) {
        if (letterFreq[leftChar] === 0) {
          matched -= 1;
        }
        letterFreq[leftChar] += 1;
      }
    }
  }
  return false;
}
