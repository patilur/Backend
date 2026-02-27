//fork
// const { fork } = require("child_process");

// console.log('Starting computation...');

// const child = fork('./file1.js');

// child.send({ number: 50 });

// child.on("message", (data) => {
//     console.log("Response received ", data);
//     console.log('Computation done!');
// });
//Spwan
const { spawn } = require("child_process");

console.log('Starting computation...');

const child = spawn('cmd', ['/c', 'echo %cd%']);

child.stdout.on('data', (data) => {
    console.log(data.toString());
});

child.stderr.on('data', (err) => {
    console.log(err.toString());
});

child.on('close', (code) => {
    console.log("Child process closed", code);
});

console.log('Computation done!');

// console.log(fib(40));
