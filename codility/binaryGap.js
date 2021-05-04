function solution(N) {
  let maxRun = 0;
  let currRun = 0;
  let started = false;
  while (N) {
    const even = N % 2 === 0; 
    if (even) {
      currRun++;
    } else {
      if (started) {
        maxRun = Math.max(currRun, maxRun);
        started = false;
      }
      started = true;
      currRun = 0;
    }
    N = Math.floor(N / 2);
  }
  return maxRun;
}
