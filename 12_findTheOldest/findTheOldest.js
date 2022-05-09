const findTheOldest = function(obj) {
    for (let person of obj) {
      if (person.yearOfDeath) {
        var age = person.yearOfDeath - person.yearOfBirth;
      } else {
        var age = new Date().getFullYear() - person.yearOfBirth;
      }
      person['age'] = age;
    }
    const ordered = obj.sort((a,b) => {
      return a.age - b.age
    })
    return ordered[ordered.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
