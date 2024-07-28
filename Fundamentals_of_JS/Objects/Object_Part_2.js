// Object creating using constructor function or singleton
const megaUser = new Object();

megaUser.id = "wolf123";
megaUser.email = "wolf@mega.com";
megaUser.isLoggedIn = false;

console.log(megaUser); // { id: 'wolf123', email: 'wolf@mega.com', isLoggedIn: false }

// Example of object chaining
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ware",
            lastname: "wolf",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // ware 


const obj1 = { 1: "first", 2: "second" };
const obj2 = { 3: "third", 4: "fourth" };
const obj4 = { 5: "fifth", 6: "sixth" };

/// copy obj1 and obj2 to obj3

// const obj3 = { obj1, obj2 };
/* console.log(obj3); /*  {
                        obj1: { '1': 'first', '2': 'second' },
                        obj2: { '3': 'third', '4': 'fourth' }
                      }  */

// Use of Spread Operator
// const obj3 = {...obj1, ...obj2};
// console.log(obj3); // { '1': 'first', '2': 'second', '3': 'third', '4': 'fourth' }

// Object.assign() method to copy one object to another 
const obj3 = Object.assign({}, obj1, obj2, obj4,);
console.log(obj3); // { '1': 'first', '2': 'second', '3': 'third', '4': 'fourth',  '5': 'fifth','6': 'sixth' }

// Objects in array
const users = [
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    }
]
console.log(users[1].email); // user@gmail.com

// More Object methods 

// Object.values() method to return array of values of an object 
console.log(Object.values(megaUser)); // [ 'wolf123', 'wolf@mega.com', false ]

// Object.keys() method to return array of keys of an object
console.log(Object.keys(megaUser)); // [ 'id', 'email', 'isLoggedIn' ]

// Object.entries() method to return array of keys and values of an object
console.log(Object.entries(megaUser)); // return both keys and values

// Object.prototype.hasOwnProperty() method to check object has property or not
console.log(megaUser.hasOwnProperty("isLoggedIn")); // true

