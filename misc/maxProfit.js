const maxProfit = (prices) => {
    // i: array of prices
    // o: integer - max profit

    // initialize current min and max
    let min = prices[0];
    let max = 0;

    // iterate through prices array
    for (let i = 0; i < prices.length; i++) {
        // if current number is less than min
        if (prices[i] < min) {
            // reassign min 
            min = prices[i];
        }
        // if current number - min is > max
        if (prices[i] - min > max) {
            // reassign max
            max = prices[i] - min;
        }
    }
    // return max
    return max;
};

// BRUTE FORCE - SLOW
// var maxProfit = function(prices) {
//     // i: array of prices
//     // o: integer - max profit

//     // initialize current max
//     let max = 0;

//     // iterate through prices array
//     for (let i = 0; i < prices.length; i++) {
//         // iterate through prices - j = i + 1
//         for (let j = i + 1; j < prices.length; j++) {
//             // if current number at j - number at i is > max
//             if (prices[j] - prices[i] > max) {
//                 // reassign max
//                 max = prices[j] - prices[i];
//             }
//         }
//     }
//     // return max
//     return max;
// };
