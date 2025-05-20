class Solution:
    def isValid(self, s: str) -> bool:
        char_set = {"}": "{", "]": "[", ")": "("}
        stack = []

        for c in s:
            if c in char_set:
                if stack and stack[-1] == char_set[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)

        return True if not stack else False
