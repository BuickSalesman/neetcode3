class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        sequence = []
        sequence.append(nums[0])
        LIS = 1

        for i in range(1, len(nums)):
            if nums[i] > sequence[-1]:
                sequence.push(nums[i])
                LIS += 1
                continue

            l, r = 0, len(sequence) - 1

            while (l < r):
                mid = l + (r - l) // 2
                if sequence[mid] < nums[i]:
                    l = mid+1
                else:
                    r = mid
            sequence[l] = nums[i]

        return LIS
