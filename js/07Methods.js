// methods en javascript

// const person = {
//     name: 'John',
//     lastName: 'Doe',
//     age: 30,
//     city: 'New York',
//     address: {
//         street: '123 Main St',
//         zip: '12345'
//     },
//     hobbies: ['reading', 'traveling', 'sports'],
//     isStudent: false,
//     fullName: function() {
//         return this.name + ' ' + this.lastName;
//     }
// };

// console.log(person.fullName());

// calculadora utilizando atributos, metodos y this

const calc = {
    value: 0,
    add: function(a) {
        this.value += a;
        return this;
    },
    subtract: function(a) {
        this.value -= a;
        return this;
    },
    multiply: function(a) {
        this.value *= a;
        return this;
    },
    divide: function(a) {
        this.value /= a;   
        return this;
    },
    clear: function() {
        this.value = 0;
        return this;
    },
    getValue: function() {
        return this.value;
    }
}

console.log(calc.add(10).getValue());
