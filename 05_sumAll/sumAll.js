const sumAll = function(startNum, endNum) {
    if (typeof(startNum) !== 'number' || typeof(endNum) !== 'number' ) {
        return "ERROR";
    } else if (startNum < 0 || endNum < 0) {
        return "ERROR"
    }

    if (startNum < endNum) {
        var lowerNum = startNum;
        var higherNum = endNum;
    } else {
        var lowerNum = endNum;
        var higherNum = startNum;
    }
    let sum = 0;
    for (let i = lowerNum; i <= higherNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;