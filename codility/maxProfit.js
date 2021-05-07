function solution(A) {
    if (!A.length) return 0;
    let min = Infinity;
    let max = 0;
    let maxProfit = 0;
    for (let i = 0; i < A.length; i++) {
        const curr = A[i];
        if (curr < min) {
            min = curr;
            max = 0;
        }
        if (A[i + 1] > max) {
            max = A[i + 1];
        }
        maxProfit = Math.max(maxProfit, max - min);
    }
    return maxProfit;
}
