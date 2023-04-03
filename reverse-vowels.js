/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 *
 * Input: s= "hello"
 * Output: "holle"
 */
function reverseVowels(s) {
  let vowels = "aeiouAEIOU";
  let wordsArray = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!vowels.includes(wordsArray[left])) left++;
    if (!vowels.includes(wordsArray[right])) right--;
    if (
      vowels.includes(wordsArray[left]) &&
      vowels.includes(wordsArray[right])
    ) {
      let temp = wordsArray[left];
      wordsArray[left] = wordsArray[right];
      wordsArray[right] = temp;
      left++;
      right--;
    }
  }

  return wordsArray.join("");
}
