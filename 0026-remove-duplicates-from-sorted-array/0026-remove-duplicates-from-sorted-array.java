class Solution {
    public int removeDuplicates(int[] nums) {
        int count = 1;
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[nums.length - 1]) break;
            if (nums[i] == nums[i + 1]) {
                System.out.println("count" + count);
                for (int j = i + 1; j < nums.length - 1; j++) {
                    nums[j] = nums[j + 1];
                }
                i--;
            } else count++; 
        } 
        return count;
    }
}