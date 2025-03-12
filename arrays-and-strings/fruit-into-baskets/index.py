# we define a function that takes 'fruits' which is a list of integers. 
# the function returns an integer reprezenting the maximum number of fruits we can collect
def totalFruit(fruits: list[int]) -> int:
    # initialized variables: 
    # left - reprezenting the beginning of the sliding window
    # max_fruits - initialized to zero, keeping track of the maximum number of fruits collected
    # basket - dictionary used to store each type of fruit in the sliding window
    left = 0
    max_fruits = 0
    basket = {}

    # we define a loop where 'right' iterates through the indexes of fruits
    for right in range(len(fruits)):
        # we add the current fruit to basket 
        basket[fruits[right]] = basket.get(fruits[right], 0) + 1
        # we create a loop that runs if the number of unique fruits exceeds two
        while len(basket) > 2:
            # we decrement the count of the leftmost fruit
            basket[fruits[left]] -= 1
            # remove the fruit from basket if its count goes to zero
            if basket[fruits[left]] == 0:
                # remove the fruit completely from the basket. 
                del basket[fruits[left]]
            # we continue to move 'left' until we have only two unique fruits left
            # We move 'left' to the right to adjust the sliding windows
            left += 1
        # we update the maximum number of fruits collected
        max_fruits = max(max_fruits, right - left + 1)

    return max_fruits
