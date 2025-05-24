const findTheOldest = function(people) {
    people.map(person=>{
        if(person.yearOfDeath==undefined){
            const date = new Date();
            const formattedDate = parseInt(date.toLocaleDateString('en-US', {
            year: 'numeric'}));
            person.yearOfDeath=formattedDate;
        }
        person.age=person.yearOfDeath-person.yearOfBirth;
    });
    let oldest=people.sort((a,b)=>b.age-a.age);
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
