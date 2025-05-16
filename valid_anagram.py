class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_hash, t_hash = {}, {}

        for s_char in s:
            s_hash[s_char] = 1 + s_hash.get(s_char, 0)

        for t_char in t:
            t_hash[t_char] = 1 + t_hash.get(t_char, 0)

        return s_hash == t_hash
