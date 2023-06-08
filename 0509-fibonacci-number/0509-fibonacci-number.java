class Solution {
    public int fib(int n) {
        if (n < 2) return n;
        int[] fibArray = new int[n + 1];
        fibArray[0] = 0;
        fibArray[1] = 1;
        for (int i = 2; i < fibArray.length; i++) {
            fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
        }
        return fibArray[fibArray.length - 1];
    }
}