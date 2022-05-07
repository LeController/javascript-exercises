const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g ,"")
    let characterArray = str.split('');
    var j = str.length-1
    for (i = 0; i < Math.floor(characterArray.length/2);i++) {
        let start = characterArray[i];
        let end = characterArray[j];
        console.log(start, '  ', end)
        if (start === end) {
            j--
            continue
        }
        else {return false}
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
