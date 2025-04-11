const getTheTitles = function(books) {
    arrTitles = [];
    books.forEach((item) => arrTitles.push(item.title));
    return arrTitles

};

// Do not edit below this line
module.exports = getTheTitles;
