const removeFromArray = function(arr, ...args) {
    // If value of array is included in args it should not remain in filtered array
    return arr.filter(val => !args.includes(val))
    
};

// Do not edit below this line
module.exports = removeFromArray;
