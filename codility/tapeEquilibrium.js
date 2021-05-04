function solution(A) {
    let runningSum = 0;
    let rightSum = A.reduce((a, b) => a + b, 0);
    let minimalDifference = Infinity;
    for (let i = 0; i < A.length - 1; i++) {
        const currNum = A[i];
        runningSum += currNum;
        rightSum -= currNum;
        const diff = Math.abs(runningSum - rightSum);
        minimalDifference = Math.min(minimalDifference, diff);
    }
    return minimalDifference;
}
