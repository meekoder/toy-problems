function solution(A) {
    let maxEnding = A[0];
    let maxSlice = A[0];
    for (let i = 1; i < A.length; i++) {
        const curr = A[i];
        maxEnding = Math.max(curr, maxEnding + curr);
        maxSlice = Math.max(maxSlice, maxEnding);
    }
    return maxSlice;
}
