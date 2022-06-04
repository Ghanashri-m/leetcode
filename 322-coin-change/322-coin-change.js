/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    
    coins.forEach(coin => {
        for (let i = coin; i < table.length; i++) {
            table[i] = Math.min(table[i], table[i-coin] + 1);
        }
    })
    
    return table[table.length - 1] !== Infinity ? table[table.length - 1] : -1;
    
    // recursive approach
//     let results = helper(coins, amount, 0, 0);
//     function helper(coins, amount, index, minCoins) {
//         if (amount === 0) return minCoins;
//         if (amount < 0 || index === coins.length) return -1;
        
//         // choose
//         let case1 = helper(coins, amount - coins[index], index, minCoins + 1);
        
//         //no choose
//         let case2 = helper(coins, amount, index + 1, minCoins);
        
//         if (case1 === -1) return case2;
//         if (case2 === -1) return case1;
        
//         return Math.min(case1, case2);
//     }
//     return results;
};
