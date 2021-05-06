function solution(A) {
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length; i++) {
        const a = A[i] + A[i + 1] > A[i + 2];
        if (a) return 1; 
    }
    return 0;
}
