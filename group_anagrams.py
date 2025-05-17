class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {}

        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1
            unique_key = tuple(count)
            if unique_key not in res:
                res[unique_key] = []
            res[unique_key].append(s)
        return list(res.values())
