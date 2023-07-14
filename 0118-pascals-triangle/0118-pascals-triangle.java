class Solution {
    public List<List<Integer>> generate(int numRows) {
        
        List<List<Integer>> results = new ArrayList<>(Arrays.asList(Arrays.asList(1)));
        List<Integer> previousList = null;
        
        for (int i = 1; i < numRows; i++) {
            List<Integer> temp = new ArrayList<>(Arrays.asList(1));
            for (int j = 1; j < i; j++) {
                temp.add(previousList.get(j - 1) + previousList.get(j));
            }
            temp.add(1);
            results.add(temp);
            previousList = temp;
        }
        return results;
            
    }
}