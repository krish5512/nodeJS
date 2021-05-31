console.log('Starting');


setTimeout(() => {              // asynchronous function call
    console.log('2 second timer')
},2000)

setTimeout(() => {
    console.log('0 second timer')
},0)
console.log('Stoping')



// Javascript/Node JS is a asynchronous , non blocking I/O runtime environment
// It uses the same chrome V8 engine to excute the javascript code with the v8 engine out side
// chrome.
// Node js is single threaded
// In synchronous call the code is getting executed line by line the way it is written
// whereas in asynchronous we can run other line while one is getting getting excuted
// in above the setTimeout is waiting to get exceuted for 2 seconds and by that time it 
// has console the other two line

// Node JS makes HTTP request to communicate with outer system servers to send and recieve the data