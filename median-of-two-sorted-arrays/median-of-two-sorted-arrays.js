/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merge = nums1.concat(nums2);
    let res = 0;
    merge = merge.sort(function(a,b){return a - b});
    if (merge.length % 2 === 0) { //even length
        res = (merge[(merge.length / 2) - 1] + merge[(merge.length / 2)]) / 2;
    } else { //odd length
      res = merge[(merge.length - 1) / 2];
    }
    return res;
};