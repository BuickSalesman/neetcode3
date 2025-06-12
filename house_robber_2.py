class Solution:
    def rob(self, nums: List[int]) -> int:
        return max(nums[0], self.robLine(nums[:-1]), self.robLine(nums[1:]))

    def robLine(self, nums):
        prev_prev_max, prev_max, true_max = 0, 0, 0

        for i in range(len(nums)):
            true_max = max(prev_max, nums[i] + prev_prev_max)
            prev_prev_max = prev_max
            prev_max = true_max

        return true_max
