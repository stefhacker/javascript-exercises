const findTheOldest = function(people) {
    
    let currentYear = new Date().getFullYear();

    let ages = people.map((person) => {
      if (person.yearOfDeath === undefined) {
        return currentYear - person.yearOfBirth;
      } else {
        return person.yearOfDeath - person.yearOfBirth;
      }
    });
    return (people[ages.indexOf(Math.max(...ages))])
};



// Do not edit below this line
module.exports = findTheOldest;
