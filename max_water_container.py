class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1
        res = 0
        while l < r:
            length = r - l
            water = min(heights[l], heights[r]) * length
            res = max(res, water)
            if heights[l] <= heights[r]:
                l += 1
            else:
                r -= 1
        return res
