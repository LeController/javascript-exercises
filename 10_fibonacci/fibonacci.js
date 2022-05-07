const fibonacci = function(num) {
    num = +num
    if (num < 0) {return "OOPS"}
    let sequence = [1, 1]
    for (i = 0; i < num; i++) {
        const nextNum = sequence[i] + sequence[i+1]
        sequence.push(nextNum)
    }
    return sequence[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
