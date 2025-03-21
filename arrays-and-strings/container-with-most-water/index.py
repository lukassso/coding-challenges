def maxArea(height: list[int]) -> int:
  left = 0
  right = len(height) - 1
  # 'max_area' keeps track of the largest area found.
  max_area = 0
  
  while left<right:
    height_left = height[left]
    height_right = height[right]
    current_area = min(height_left, height_right) * (right - left)
    max_area = max(max_area, current_area)
    
    if height_left < height_right:
      left += 1
    else:
      right -= 1
      
  return max_area
      
result = maxArea([1,8,6,2,5,4,8,3,7])
print(result)