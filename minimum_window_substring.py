class Solution:
    def minWindow(self, s: str, t: str) -> str:
        l = 0
        res = ""
        need, seen = {}, {}
        needcount, seencount = 0, 0

        for c in t:
            need[c] = need.get(c, 0) + 1
            needcount += 1

        for r in range(len(s)):
            seen[s[r]] = seen.get(s[r], 0) + 1

            if s[r] in need and seen[s[r]] <= need[s[r]]:
                seencount += 1

            while seencount >= needcount:
                window = s[l:r + 1]
                res = window if not res else min(res, window, key=len)
                seen[s[l]] -= 1
                if s[l] in need and seen[s[l]] < need[s[l]]:
                    seencount -= 1
                l += 1

        return res
