function incorrectPasscodeAttempts(passcode, attempts) {
  let count = 0;
  for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === passcode) {
      count = 0;
    } else {
      count++;
    }
    if (count >= 10) return true;
  }
  return false;
}
