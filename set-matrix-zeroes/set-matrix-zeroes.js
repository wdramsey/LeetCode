/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix.length === 1 && matrix[0].length === 1) return;  
    let loc = [[]];
    let n = 0;
    for(let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 0) {
                loc[n] = [y,x];
                n++;
            }
        }
    }
    if (n === 0) return;
    for (let k = 0; k < loc.length; k++) { //x search, y fixed
         for(let x = 0; x < matrix[0].length; x++) {
               matrix[loc[k][0]][x] = 0;

            }
        }
    for (let k = 0; k < loc.length; k++) { //y search, x fixed
         for(let y = 0; y < matrix.length; y++) {
               matrix[y][loc[k][1]] = 0;

            }
        }
};

