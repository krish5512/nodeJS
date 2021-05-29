// ES5 function
// const square = function (x) {
//     return x * x
// };

// ES6 arrow function
// const square = (x) => {
//     return x * x
// }
// ES6 shorthand version arrow function
// const square = (x) => x * x
// console.log(square(5));


// Benefits of Standard function syntax over arrow function as it allows the binding of properties and allow to access this.
// const event = {
//     name: 'birthday party',
//     printGuestList() {
//         console.log('Guest List for ' + this.name)
//     }
// }
// event.printGuestList()

// Standard fucntion have there own this binding and to use the parents this binding we need
// create a refernce to access it inside the sub child.
// Where as when we use Arrow function, we have the access of the parent binding and also the child bind
//                       ****Arrow function dont bind there this value****  
// They are not suited for methods but can be used anywhere else 


const event = {
        name: 'birthday party',
        guestList : ['Krihsn','A','A2','K2'],
        printGuestList() {
            console.log('Guest List for ' + this.name)
            this.guestList.forEach(guest => {
                console.log(guest + ' is attending ' + this.name)
            })
        }
    }
 event.printGuestList()
    
