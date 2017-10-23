const {Transform} = require('stream');
const myReadable = require('./12-my-readable-stream-classes');

const upperCaseTr = new Transform({
	transform(chunk, encoding, callback) {
		this.push(`${chunk.toString().toUpperCase()}\n`);
		callback();
	}
});

const readable = new myReadable();
readable.pipe(upperCaseTr).pipe(process.stdout);
