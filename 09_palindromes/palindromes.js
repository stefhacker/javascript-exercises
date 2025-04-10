const palindromes = function (string) {
    string = string.toLowerCase();
    string = string
        .split('')
        .filter(char => char !== '!' && char !== '.' && char !==' ' && char !==',');
        

    let copy = [];
    for(i = 0; i < string.length; i++){
        copy[i] = string[string.length - i - 1];
        }
    
    string = string.join('');
    copy = copy.join('')
   
    
    if(copy == string){
        return true

    } else {
        return false
    }

};



// Do not edit below this line
module.exports = palindromes;
