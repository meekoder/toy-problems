function solution(A, B, K) {
    const offset = A % K === 0 ? 1 : 0;
    return parseInt(B / K) - parseInt(A / K) + offset;
}
