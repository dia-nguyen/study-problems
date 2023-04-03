/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let lowestPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    }

    let currentProfit = Math.abs(lowestPrice - prices[i]);

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
    }
  }
  return maxProfit;
};

// @lc code=end

