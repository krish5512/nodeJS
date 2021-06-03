// Object property Shorthand

const name = 'Krishna';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'vaishali',
};

console.log(user)

// Object destructuring
// If no property is there in the object then the new varaible will be saved as undefined.
const product = {
    label: 'Red notebook',
    price: 40,
    stock: 200,
    salePrice: undefined
};
// renameing the object property 
const {
    stock: stockVl
} = product;

console.log(stockVl)