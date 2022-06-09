var person = {
    firstName: 'Boaz',
    lastName: 'Sender',
    greet: function (greeting, punctuation) {
        console.log(greeting + ',' + this.firstName + punctuation);
    }
};
    
console.log('First name:' + person.firstName); // dot notation
console.log('Last name:' + person ['lastName']); // bracket notation


var prop = 'lastName';
console.log('Last name:' + person [prop]);


person.greet();


var sayIt = person.greet;
sayIt.call(person, 'Hello', '!!!');
sayIt.apply(person, ['Hello', '!!!']);