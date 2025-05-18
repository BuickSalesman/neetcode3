class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        result = 0

        new_set = set(nums)

        for num in new_set:
            if num - 1 not in new_set:
                streak = 1
                while num + streak in new_set:
                    streak += 1
                result = max(result, streak)

        return result
