/*
Step 1: Problem Analysis
- We are given an n x n square matrix containing numbers.
- We need to rotate the matrix by 90 degrees in a clockwise direction.
- The rotation must be done in-place, meaning we cannot use an additional matrix.
- We cannot use extra memory, except for a few auxiliary variables.

Step 2: Data Structures – 2D Matrix
1. A matrix (matrix[][]) is a two-dimensional (2D) array.
2. Matrix indexing is done using matrix[row][col], where:
- row – represents the row number (horizontal axis Y).
- col – represents the column number (vertical axis X).
3. Rotating the matrix by 90 degrees changes the position of elements as follows:
- matrix[row][col] moves to matrix[col][n - row - 1].
4. Matrices are stored in memory as array of arrays.

Step 3: Algorithm – Rotate Matrix In-Place
🔹 Mathematical Approach – Coordinate Transformation
1. Rotating the matrix by 90 degrees in the clockwise direction changes coordinates:
- Each element at matrix[row][col] moves to matrix[col][n - row - 1].
2. Each layer of the matrix must be rotated independently to complete the full transformation.
🔹 Programming Approach – Two-Step Transformation
The in-place rotation method without additional memory consists of two steps:
1. Matrix Transposition (Swapping Rows with Columns):
- Swap matrix[row][col] with matrix[col][row] for row < col.
2. Horizontal Reflection (Swapping Columns in Place):
- Swap matrix[row][col] with matrix[row][n - col - 1].

Step 4: Implementation
*/

