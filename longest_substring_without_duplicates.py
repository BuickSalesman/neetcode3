class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        hashmap = {}
        length = 0

        for r in range(len(s)):
            hashmap[s[r]] = hashmap.get(s[r], 0) + 1
            while hashmap[s[r]] > 1:
                hashmap[s[l]] -= 1
                l += 1
            length = max(length, (r - l) + 1)

        return length
