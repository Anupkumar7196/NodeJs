// console.log("How are you buddy");

// function fun1(){
//     setTimeout(() => console.log("I am set Time Out"),2000);
//     process.nextTick(()=> console.log("I am process 1"));
//     setImmediate(()=>console.log("I am set Immediate"));
// }
// function fun2(){
//     console.log("I am fun 2");
// }
// function fun3(){
//     console.log("I am fun 3");
// }
// fun1();
// fun2();
// fun3();

// const { log } = require('console');
// const fs = require('fs');
// setTimeout(() => {
//     console.log('I am set Timeout');
    
// },0);

// fs.readFile(__filename,()=>{
//     console.log("I am File")
// })
// process.nextTick(()=>console.log("I am Process"));
// Promise.resolve().then(()=> console.log('This is Promise'));

//EVENTS
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('checkPage',(data)=>{
//     console.log('Event Occur',data.message);
// })
// emitter.emit('checkPage',{message: 'Hello, How are you..'});

//STREAMS:- Readable Streams, Writable Streams, Duplex Streams, Transform Streams
