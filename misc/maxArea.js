const maxArea = (height) => {
    // keep track of max area so far
    let maxArea = 0;

    // iterate through height array
    for (let i = 0; i < height.length; i++) {
        // iterate - start j at i + 1
        for (let j = i + 1; j < height.length; j++) {
            // get min from element at i and j
            const minHeight = Math.min(height[i], height[j]);
            // calculate area - (j - i) * min
            const area = (j - i) * minHeight;
            // if area > max area
            if (area > maxArea) {
                // set max area
                maxArea = area;
            }
        }
    }
    // return max area
    return maxArea;
};
