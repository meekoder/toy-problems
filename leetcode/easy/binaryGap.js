/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  let maxRun = 0;
  let currRun = 0;
  let started = false;
  while (n) {
    const even = n % 2 === 0; 
    if (even) {
      currRun++;
    } else {
      if (started) {
        currRun++;
        maxRun = Math.max(currRun, maxRun);
        started = false;
      }
      started = true;
      currRun = 0;
    }
    n = Math.floor(n / 2);
  }
  return maxRun;
};
