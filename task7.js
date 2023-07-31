// Map to objects

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
/* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith




// Please note that in the arrow functions we need to use additional brackets.

// We can’t write like this:

let usersMapped = users.map(user => {
  fullName: `${user.name} ${user.surname}`,
  id: user.id
});
// As we remember, there are two arrow functions: without body value => expr and with body value => {...}.

// Here JavaScript would treat { as the start of function body, not the start of the object. The workaround is to wrap them in the “normal” brackets:

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
// Now fine.