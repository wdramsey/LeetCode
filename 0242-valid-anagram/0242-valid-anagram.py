class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        dict = {}
        for char in s:
            dict.update({char: (dict.setdefault(char, 0) + 1)})
        for char in t:
            count = dict.setdefault(char, 0)
            if count == 0: return False
            else: dict.update({char: count - 1})
        return True