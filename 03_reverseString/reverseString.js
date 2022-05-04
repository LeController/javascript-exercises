const reverseString = function(str) {
    let characterArray = str.split('');
    reversed = ''
    for (i = characterArray.length-1; i >= 0; i--) {
        reversed += characterArray[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;