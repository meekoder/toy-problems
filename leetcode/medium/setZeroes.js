const setZeroes = (matrix) => {
    const rows = [];
    const cols = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const curr = matrix[i][j];
            if (curr === 0) {
                rows.push(i);
                cols.push(j);
            }
        }
    }
    return switchToZero(matrix, rows, cols);
};

const switchToZero = (matrix, rows, cols) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rows.includes(i) || cols.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
