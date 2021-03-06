function fancyRide(l, fares) {
  const prices = fares.map(f => f * l);
  const ubers = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
  let highestAffordable = 0;
  let highestIdx = 0;
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= 20 && prices[i] > highestAffordable) {
      highestAffordable = prices[i];
      highestIdx = i;
    }
  }
  return ubers[highestIdx];
}
