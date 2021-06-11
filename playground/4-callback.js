// setTimeout(() => {
//     console.log('two seconds up')
// }, 2000)

// const names = ['krishna', 'rohit', 'ankit']

// const shortNames = names.filter((name) => {
//     return name.length <= 5
// })
// console.log(shortNames)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Delhi', (data) => {
//     console.log(data)
// });

// const add = (a,b ,callback) => {
//     setTimeout(() => {
//         callback(a+b)
//     },2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })




const doWorkCallBack = (callback) => {
    setTimeout(() => {
        // callback('this is my error', undefined)
        callback(undefined,"this is my result")
    }, 2000)
}

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error);
    }
    return console.log(result)
})