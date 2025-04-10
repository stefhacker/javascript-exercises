const fibonacci = function(n) {
    const n_cleansed = parseInt(n);
    if( n_cleansed < 0){
        return 'OOPS'
    }
    if( n_cleansed == 0){
        return 0
    }
    if( n_cleansed == 1){
        return 1
    } else {
        return fibonacci(n_cleansed - 1) + fibonacci(n_cleansed - 2) 
    }
   

};

// Do not edit below this line
module.exports = fibonacci;
