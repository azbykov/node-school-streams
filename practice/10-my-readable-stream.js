const {Readable} = require('stream');

const MyReadable = new Readable();

MyReadable.push('First element');
MyReadable.push('Second element');
MyReadable.push('Third element');
MyReadable.push(null); // No more data

MyReadable.pipe(process.stdout);
