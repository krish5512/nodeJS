const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 4, 5, 6]);  /*THis is on success */
        reject('This is my error') /*THis is on error */
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('success', result);
}).catch((error) => {
    console.log('Error!', error)
})