/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buyPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        profit = prices[i] - buyPrice;
        maxProfit = Math.max(maxProfit, profit);
        if (prices[i] < buyPrice) buyPrice = prices[i];
    }
    return maxProfit;
};