const removeFromArray = function(arr, ...Args) {
    let args = Args;
    for (let arg of args) {
        if (arr.includes(arg)) {
            const index = arr.indexOf(arg);
            arr.splice(index, 1);
        } 
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
