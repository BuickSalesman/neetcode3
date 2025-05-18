class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let profit = 0;
    let l = 0;

    for (let r = 0; r < prices.length; r++) {
      profit = Math.max(profit, prices[r] - prices[l]);
      if (prices[r] < prices[l]) {
        l = r;
      }
    }

    return profit;
  }
}
