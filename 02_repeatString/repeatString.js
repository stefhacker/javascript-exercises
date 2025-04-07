const repeatString = function(string, repeatNum) {
    if (repeatNum == 0) {
        return ''
    }
    if (repeatNum <= -1) {
        return 'ERROR';
        
    }
    returnString = ''
    for (let i = 0; i < repeatNum; i++){
        returnString = returnString + string
    }
    return returnString


};

// Do not edit below this line
module.exports = repeatString;
