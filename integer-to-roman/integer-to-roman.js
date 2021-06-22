/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
        var numStr = num.toString();
    var res = '';
    while(numStr >= 1) {
      if(numStr.length === 4) {
        switch (numStr[0]) {
          case '1':
            res += 'M';
            break;
          case '2':
            res += 'MM';
            break;
          case '3':
            res += 'MMM';
            break;
          case '4':
            res += 'MVBAR';
            break;
          case '5':
            res += 'VBAR';
            break;
          case '6':
            res += 'VIBAR';
            break;
          case '7':
            res += 'VIIBAR';
            break;
          case '8':
            res += 'VIIIBAR';
            break;
          case '9':
            res += 'IXBAR';
            break;
          case '0':
            break;
        }
      }
      if(numStr.length === 3) {
        switch (numStr[0]) {
          case '1':
            res += 'C';
            break;
          case '2':
            res += 'CC';
            break;
          case '3':
            res += 'CCC';
            break;
          case '4':
            res += 'CD';
            break;
          case '5':
            res += 'D';
            break;
          case '6':
            res += 'DC';
            break;
          case '7':
            res += 'DCC';
            break;
          case '8':
            res += 'DCCC';
            break;
          case '9':
            res += 'CM';
            break;
          case '0':
            break;
        }
      }
      if(numStr.length === 2) {
        switch (numStr[0]) {
          case '1':
            res += 'X';
            break;
          case '2':
            res += 'XX';
            break;
          case '3':
            res += 'XXX';
            break;
          case '4':
            res += 'XL';
            break;
          case '5':
            res += 'L';
            break;
          case '6':
            res += 'LX';
            break;
          case '7':
            res += 'LXX';
            break;
          case '8':
            res += 'LXXX';
            break;
          case '9':
            res += 'XC';
            break;
          case '0':
            break;
        }
      }
      if(numStr.length === 1) {
        switch (numStr[0]) {
          case '1':
            res += 'I';
            break;
          case '2':
            res += 'II';
            break;
          case '3':
            res += 'III';
            break;
          case '4':
            res += 'IV';
            break;
          case '5':
            res += 'V';
            break;
          case '6':
            res += 'VI';
            break;
          case '7':
            res += 'VII';
            break;
          case '8':
            res += 'VIII';
            break;
          case '9':
            res += 'IX';
            break;
          case '0':
            break;
        }
      }
      numStr = numStr.replace(numStr[0],''); 
    }
   return res;
};