def length_of_longest_substring_two_distinct(s: str) -> int:
    # We initialize the variables `left`, `right`, and `max_length` to zero.
    left = 0
    right = 0
    max_length = 0

    # We define an empty dictionary called `char_map`.
    char_map = {}

    # We start a `while` loop that iterates as long as `right` is less than `len(s)`.
    while right < len(s):
        # We define a variable `char` and initialize it with `s[right]`.
        char = s[right]

        # We update `char_map` at the key `char` by using the `get` method to retrieve its current count
        # (or `0` if it doesn't exist), and then add `1` to it.
        char_map[char] = char_map.get(char, 0) + 1

        # We define an inner `while` loop that iterates as long as the length of `char_map` is greater than 2.
        while len(char_map) > 2:
            # We define a variable `left_char` and initialize it with `s[left]`.
            left_char = s[left]

            # We update `char_map` at the key `left_char` by decrementing its value by one.
            char_map[left_char] -= 1

            # We use an `if` statement to check if the value of `char_map` at the key `left_char` is equal to zero.
            # If so, we delete this character from the map.
            if char_map[left_char] == 0:
                del char_map[left_char]

            # We increment `left` by one to move the window forward.
            left += 1

        # We update `max_length` by choosing the greater value between the current `max_length`
        # and the length of the current window (`right - left + 1`).
        max_length = max(max_length, right - left + 1)

        # We increase `right` by one to move the window forward.
        right += 1

    # We return `max_length` as the result of the function —
    # it is the length of the longest substring with at most two distinct characters.
    return max_length
