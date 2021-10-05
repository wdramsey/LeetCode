/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
        var helper = (string) => {
        var res = '';
        for (let i = 0; i < string.length; i++) {
            if ((string[i] !== '#' && string[i + 1] !== '#') || (string[i] !== '#' && i === string.length - 1)) {
                res = res.concat(string[i]);
            } else if (string[i] !== '#') {
                i++;
            } else {
                res = res.substring(0, res.length - 1);
            }
        }
        return res;
    }
    return (helper(s) === helper(t));
};