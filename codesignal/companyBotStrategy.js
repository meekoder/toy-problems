function companyBotStrategy(trainingData) {
  const arr = trainingData.filter(x => x[1] === 1)
  if (!arr.length) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i][0];
  }
  return sum / arr.length;
}
