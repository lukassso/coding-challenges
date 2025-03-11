
# we define a function that takes 'matrix' which is a two-dimensional list (n x n)
def rotate(matrix: list[list[int]]) -> None:
  """_summary_

  Args:
      matrix (list[list[int]]): _description_
  """
  # we define a variable 'n' and assign value represents the size of the matrix
  n = len(matrix)
  # we iterate through row indexes from 0 to n-1
  for row in range(n):
    # we iterate through column indexes from the next row index to n-1
    for col in range(row + 1, n):
      #  we swap elements which results in the transposition of the matrix
      matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]
  # we iterate through the rows to reverse each row
  for row in range(n):
    # we iterate through col from 0 to 'n//2' where only for half of the row length
    for col in range(n // 2):
      # we swap elements to achieve the rotation of the matrix
      matrix[row][col], matrix[row][n - 1 - col] = matrix[row][n - 1 - col], matrix[row][col]
      