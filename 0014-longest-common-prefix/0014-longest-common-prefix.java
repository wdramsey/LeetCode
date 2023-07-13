class Solution {
    public String longestCommonPrefix(String[] strs) {
        String answer = strs[0];
        int index = 0;
        for (int i = 1; i < strs.length; i++) {
            if (answer.length() > strs[i].length()) {
                answer = answer.substring(0, strs[i].length());   
            }   
            for (int j = answer.length() - 1; j >= 0; j--) {
                if (answer.charAt(j) != strs[i].charAt(j)) {
                    answer = answer.substring(0, j);
                }
            }
        }
        return answer;
        
    }
}