// A function will return Undefined implicitly if no return statement is added to return explicitly
// Async function always returns promise


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Number must be non negative');
            }

            resolve(a + b);

        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(2, 98);
    const sum2 = await add(sum, 78);
    const sum3 = await add(sum2, 5)
    // const sum3 = await add(sum2, -5)
    return sum3
}


doWork().then((result) => {
    console.log({
        result
    });
}).catch((e) => {
    console.log(e)
})