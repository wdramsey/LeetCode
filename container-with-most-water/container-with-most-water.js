/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {

//     let res = 0;
//     let temp;
//     for (let leftEdge = 0; leftEdge < height.length; leftEdge++) {
//         for (let rightEdge = leftEdge + 1; rightEdge < height.length; rightEdge++) {
//             temp = Math.min(height[leftEdge], height[rightEdge]) * (rightEdge - leftEdge);
//             console.log(temp)
//             if (temp > res) {
//                 res = temp;              
//             }
//         }
//     }
//     return res;
    
// };
 var maxArea = function(height) {
     var res = Math.min(height[0],height[1]);
     var temp;
     var left = 0;
     var right = height.length - 1;
     
     while (left !== right) {
         temp = Math.min(height[left], height[right]) * (right - left);
         if (temp > res) {
             res = temp;
         }
         if (height[left] > height[right]) {
             right--;
         } else {
             left++;
         }
     }
     return res;
 };

