const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
}


// add(1,2).then((sum) => {
//     console.log(sum)
//     add(sum,5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e2) => {
//         console.log(e2)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Promise Chaining Example
add(1, 2).then((sum) => {
    console.log(sum);
    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.log(e)
})