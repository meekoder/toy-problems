function circleOfNumbers(n, firstNumber) {
  const half = Math.ceil(n / 2);
  if (firstNumber >= half) {
    return firstNumber - half;
  }
  return firstNumber + half;
}
