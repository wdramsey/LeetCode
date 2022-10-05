class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if (len(nums) == 1): return nums[0]
        table = [0]*(len(nums) + 1)
        table[1] = nums[0]
        for index in range(1, len(nums)):
            current = nums[index]
            table[index + 1] = max(table[index], current + table[index - 1])
        return table[len(table)-1]
        
        