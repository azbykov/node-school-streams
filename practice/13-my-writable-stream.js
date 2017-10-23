const {Writable} = require('stream');
const myReadable = require('./12-my-readable-stream-classes');

class MyWritable extends Writable {
	constructor(options) {
		super(options);
	}

	_write(chunk, encoding, callback) {
		console.log(chunk.toString());
		callback();
	}
}

const readable = new myReadable();
const writable = new MyWritable();

readable.pipe(writable);
