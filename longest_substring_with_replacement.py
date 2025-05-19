class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0
        max_f = 0
        l = 0
        seen = {}

        for r in range(len(s)):
            seen[s[r]] = 1 + seen.get(s[r], 0)
            max_f = max(max_f, seen[s[r]])
            while (r - l) + 1 - max_f > k:
                seen[s[l]] -= 1
                l += 1

            res = max(res, (r - l) + 1)

        return res
