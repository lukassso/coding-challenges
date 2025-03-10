# 48. Rotate Image by 90 Degrees
https://leetcode.com/problems/rotate-image/description/

## Problem Statement

You are given an `n x n` 2D matrix representing an image. Rotate the image by **90 degrees clockwise**.

You have to rotate the image **in-place**, which means you must modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

## Examples

### Example 1

![](./mat1.jpg)

**Input:**
```plaintext
matrix = [[1,2,3],
          [4,5,6],
          [7,8,9]]
```

**Output:**
```plaintext
[[7,4,1],
 [8,5,2],
 [9,6,3]]
```

### Example 2

![](./mat2.jpg)

**Input:**
```plaintext
matrix = [[5,1,9,11],
          [2,4,8,10],
          [13,3,6,7],
          [15,14,12,16]]
```

**Output:**
```plaintext
[[15,13,2,5],
 [14,3,4,1],
 [12,6,8,9],
 [16,7,10,11]]
```

## Constraints

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`