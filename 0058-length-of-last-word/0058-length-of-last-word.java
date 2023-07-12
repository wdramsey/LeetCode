class Solution {
    public int lengthOfLastWord(String s) {
        int answer = 0;
        if (s.charAt(s.length() - 1) != ' ') {
            answer = (s.length() - 1 - s.lastIndexOf(" "));
        } else {
            for (int i = s.length() - 2; i >= 0; i--) {
                if (s.charAt(i) != ' ') answer++;
                else if (answer > 0) {
                    return answer;
                }
            }
        }
        return answer;
    }
}