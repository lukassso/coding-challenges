
def searchRange(nums: list[int], target: int) -> list[int]:
  # We define the binarySearch function that takes findFirst as a boolean, which handles the binary search.
  def binarySearch(findFirst: bool) -> int:
    # We initialize the variables left, right, and result.
    left, right, result = 0, len(nums) -1, -1
    
    # We define a while loop that runs as long as left is less than or equal to right.
    while left <= right:
      # We set mid as the middle index between left and right.
      mid = (left + right) // 2
      
      # We use an if statement to check if nums[mid] is equal target
      if nums[mid] == target:
        # If true, we update result to mid
        result = mid
        if findFirst:
        # If findFirst is True, we update right to continue searching for the first occurrence
          right = mid - 1
        else:
          # Otherwise, we update left to continue searching for the last occurrence.
          left = mid + 1
      # if nums index is smaller than target
      elif nums[mid] < target:
        # we update left to search in the right half
        left = mid + 1
      else:
        #  otherwise we update right
        right = mid -1
    # after exiting the loop, we return result
    return result
  
  # We return the result in the [first, last] format
  return [binarySearch(True), binarySearch(False)]