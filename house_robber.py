class Solution:
    def rob(self, nums: List[int]) -> int:
        prev_max = 0
        prev_prev_max = 0

        for i in range(len(nums)):
            true_max = max(nums[i] + prev_max, prev_prev_max)
            prev_max = prev_prev_max
            prev_prev_max = true_max

        return prev_prev_max
