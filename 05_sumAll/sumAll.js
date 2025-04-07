const sumAll = function(num1, num2) {

    if( !Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR';

    }
    
    if(num1 >= num2) {
        const copy = num2;
        num2 = num1;
        num1 = copy;
    }

    let a = 0;
    for(let i = num1; i<= num2; i++){
        a = a + i;
    }
    return a


};

// Do not edit below this line
module.exports = sumAll;
