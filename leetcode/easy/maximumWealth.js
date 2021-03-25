/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  accounts.forEach(account => {
    const amount = account.reduce((a, b) => a + b, 0);
    if (amount > max) {
      max = amount;
    }
  });
  return max;
};
