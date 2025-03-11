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
// We define the function to rotate the matrix which is a square two-dimensional array (n x n). The function returns void, meaning it modifies the matrix in-place without returning new one.
function rotate(matrix: number[][]): void {
  // We difine a variable 'n' and initialize it as 'matrix.length', representing the matrix size
  const n = matrix.length;
  // Implementation of Matrix transposition
  // We iterate through each row index (row) in 'n', stopping when 'row<n'
  for (let row = 0; row < n; row++) {
    //Inside the loop we define another looop that iterates through each column index (col), starting from 'row + 1' to avoid redundant swaps
    for (let col = row + 1; col < n; col++) {
      // For each iteration we swap values efectively transposing the matrix by switching rows and columns
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  // Mirror implementation (Swapping columns in place)
  // We define a 'for' loop that iterates 'row' indexes from 0 to 'n-1', covering all rows
  for (let row = 0; row < n; row++) {
    // Inside the loop we define second loop that iterates through column indexes from 0 to Math.floor(n / 2) processing only half or the row(rounded down)
    for (let col = 0; col < Math.floor(n / 2); col++) {
      // Inside the loop we swap the elements effecively reversing the order of columns in the current row. The purpose of this operation is to mirror the matrix along its vertical axis, completing the 90 degree rotation
      [matrix[row][col], matrix[row][n - col - 1]] = [
        matrix[row][n - col - 1],
        matrix[row][col],
      ];
    }
  }
}
