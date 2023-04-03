/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.
 * Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.
 */
function checkIfPangram(sentence) {
  const alphabets = "abcdefghijklmopqrstuvwxyz";
  const letterFreq = {};

  for (let i = 0; i < sentence.length; i++) {
    if (alphabets.includes(sentence[i])) {
      if (sentence[i] in letterFreq) {
        letterFreq[sentence[i]] += 1;
      } else {
        letterFreq[sentence[i]] = 1;
      }
    }
  }
  if (Object.keys(letterFreq).length === alphabets.length) return true;
  return false;
}
