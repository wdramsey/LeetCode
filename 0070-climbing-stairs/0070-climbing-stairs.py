class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        res = [None]*(n)
        for i in range(len(res)):
            if i == 0:
                res[i] = 1
            elif i == 1:
                res[i] = 2
            else: res[i] = res[i-1] + res[i-2]
        return res[n-1]
            
        
        