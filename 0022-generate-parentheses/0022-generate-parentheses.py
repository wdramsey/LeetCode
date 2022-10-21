class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
    
        result = []
        
        def helper(currStr, left, right):
            if (right < left):
                return
            if len(currStr) < n*2:
                if (left):
                    helper(currStr + "(", left-1,right)
                if (right):
                    helper(currStr + ")",left,right-1)
            else:
                result.append(currStr)
        helper("",n,n)
        return result
       
    
    
        