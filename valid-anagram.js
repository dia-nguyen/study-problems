/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Input: s = "listen", t = "silent"
 * Output: true
 */
function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;

  let letterFreq = {};

  for (let i = 0; i < s.length; i++) {
    letterFreq[s[i]] = (letterFreq[s[i]] || 0) + 1;
    letterFreq[t[i]] = (letterFreq[t[i]] || 0) - 1;
  }
  for (let char in letterFreq) {
    if (letterFreq[char] !== 0) {
      return false;
    }
  }
  return true;
}
