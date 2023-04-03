/**
 * Given an array of strings words and two different strings that already exist in the array word1 and word2,
 * return the shortest distance between these two words in the list.
 *
 * Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"
 * Output: 5
 * Explanation: The distance between "fox" and "dog" is 5 words.
 */
function shortestDistance(words, word1, word2) {
  let pos1 = -1;
  let pos2 = -1;
  let shortestDistance = words.length;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      pos1 = i;
    } else if (words[i] === word2) {
      pos2 = i;
    }

    if (pos1 !== -1 && pos2 !== -1) {
      if (Math.abs(pos1 - pos2) < shortestDistance)
        shortestDistance = Math.abs(pos1 - pos2);
    }
  }
  return shortestDistance;
}
