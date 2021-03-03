var numberOfSteps  = function(num) {
  let steps = 0;
  while (num >= 0) {
    if (num === 0) return steps;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
    steps++;
  }
  return steps;
};
