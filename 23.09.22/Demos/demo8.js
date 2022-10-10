let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

console.log("---------Before modification----------");
console.log(person);

let copiedPerson=person;
copiedPerson.firstName = 'Jane'; 
copiedPerson.address.street = 'Amphitheatre Parkway'; 
copiedPerson.address.city = 'Mountain View';

console.log("---------copiedPerson after modification----------");
console.log(copiedPerson);
console.log("---------person after modification----------");
console.log(person);

