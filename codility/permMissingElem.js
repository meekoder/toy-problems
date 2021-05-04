function solution(A) {
    if (!A.length) return 1;
    const max = A.length + 1;
    const total = A.reduce((a, b) => a + b, 0);
    return ((max * (max + 1)) / 2) - total;
}
