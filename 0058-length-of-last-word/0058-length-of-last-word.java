class Solution {
    public int lengthOfLastWord(String s) {
        if (s.charAt(s.length() - 1) == ' ') {
            String [] temp = s.split(" ");
            return temp[temp.length - 1].length();
        } else return s.length() - 1 - s.lastIndexOf(" ");
        
    }
}