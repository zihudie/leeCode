/**
 * 17. 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {*} digits 
 */
var letterCombinations = function (digits) {
    var reg = /[^2-9]/g;
    if (!digits || reg.test(digits)) {
        return [];
    }

    var strArr = digits.split("");

    var digitObj = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    if (strArr.length == 1) {
        return digitObj[digits];
    }
    var digitsArr = [];
    for (var i = 0; i < strArr.length; i++) {
        digitsArr.push(digitObj[strArr[i]]);
    }

    function joinFn() {
        var newArr = [];
        for (var i = 0; i < digitsArr[0].length; i++) {
            for (var j = 0; j < digitsArr[1].length; j++) {
                newArr.push(digitsArr[0][i] + digitsArr[1][j]);
            }
        }
        digitsArr.splice(0, 2, newArr);
        if (digitsArr.length > 1) {
            joinFn();
        } else {
            return newArr;
        }
        return digitsArr[0];
    }

    return joinFn();
};