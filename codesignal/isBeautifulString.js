function isBeautifulString(inputString) {
  if (!inputString.includes('a')) return false;
  const letterCount = new Map();
  for (let i = 0; i < inputString.length; i++) {
    const currLetter = inputString[i];
    if (letterCount.has(currLetter)) {
      const newVal = letterCount.get(currLetter) + 1;
      letterCount.set(currLetter, newVal);
    } else {
      letterCount.set(currLetter, 1);
    }
  }
  
  const sorted = [...letterCount].sort();
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] < sorted[i + 1][1]) return false;
    if (Math.abs(sorted[i][0].charCodeAt() - sorted[i + 1][0].charCodeAt()) > 1) return false;
  }
  return true;
}
