// Object Declaration and Initialization
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'traveling'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    },
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};

// Accessing Object Properties
console.log("First Name:", person.firstName);
console.log("Age:", person['age']); 
console.log("Street:", person.address.street); 
console.log('\n');

// Adding a Property
person.email = 'john.doe@example.com';
console.log("Email:", person.email); 
console.log('\n');

// Deleting a Property
delete person.hobbies;
console.log("Hobbies:", person.hobbies); 
console.log('\n');

// Using Object Method
console.log(person.greet()); 
console.log('\n');

// Iterating through Object Properties
for (let key in person) {
    if (typeof person[key] !== 'function') {
        console.log(`${key}: ${person[key]}`);
    }
}
