let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

//setting a new value to object

myBook.title = 'Animal Farmer';

console.log(`${myBook.title} by ${myBook.author}`);

//challenge Area

// name ,agre, location
// Andrew is 27 and lives in philadelphia

let personDeatils = {
    name: 'Shahid khan',
    age: 27,
    location: 'Ashugonj'
}

console.log(`${personDeatils.name} is ${personDeatils.age} and lives in ${personDeatils.location}.`)

personDeatils.age = personDeatils.age + 1
console.log(`${personDeatils.name} is ${personDeatils.age} and lives in ${personDeatils.location}.`)