/**
 * You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.
 * You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:
 * - Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
 * - You can start with any tree, but you can’t skip a tree once you have started.
 * - You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
 *
 * Input: Fruit=['A', 'B', 'C', 'A', 'C']
 * Output: 3
 * Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
 */


function fruits_into_baskets(fruits) {
  let maxLength = 0;
  let freq = {};
  let windowStart = 0;

  for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    if(Object.keys(freq).length > 2) {
      freq[fruits[windowStart]] -= 1;
      if(freq[fruits[windowStart]] === 0) delete freq[fruits[windowStart]]
      windowStart += 1;
    }
      freq[fruits[windowEnd]] = (freq[fruits[windowEnd]] || 0) + 1

    const values = Object.values(freq);
    const sum = values.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    maxLength = Math.max(sum, maxLength)
  }
  return maxLength;
}
