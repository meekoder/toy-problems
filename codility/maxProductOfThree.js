function solution(A) {
    A.sort((a, b) => a - b);
    // 3 highest
    const max1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    // 1st smallest * 2nd smallest * 1st biggest
    const max2 = A[0] * A[1] * A[A.length - 1];
    return Math.max(max1, max2);
}
