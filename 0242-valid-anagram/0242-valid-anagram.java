class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        Map<Character, Integer> smap = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            smap.put(s.charAt(i), smap.getOrDefault(s.charAt(i), 0) + 1);
        }
        for (int i = 0; i< t.length(); i++) {
            int count = smap.getOrDefault(t.charAt(i), 0);
            if (count == 0) return false;
            else smap.put(t.charAt(i), count - 1);
        }
        return true;
    }
}

        