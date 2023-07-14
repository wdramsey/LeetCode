class Solution {
    public List<List<Integer>> generate(int numRows) {
        
        List<List<Integer>> results = new ArrayList<>(Arrays.asList(Arrays.asList(1)));
        for (int i = 1; i < numRows; i++) {
            List<Integer> temp = new ArrayList<>(Arrays.asList(1));
            for (int j = 1; j < i  ; j++) {
                temp.add(results.get(i - 1).get(j - 1) + results.get(i - 1).get(j));
            }
            temp.add(1);
            results.add(temp);
        }
        return results;
            
    }
}