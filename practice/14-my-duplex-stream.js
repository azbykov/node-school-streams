const {Duplex} = require('stream');

class myDuplex extends Duplex{
	constructor(options) {
		super(options);
		this.queue = [];
	}

	_write(chunk, encoding, callback) {
		this.queue.push(Buffer.concat([
				new Buffer("REC: "), chunk, new Buffer("\n")]));
		callback();
	}

	_read(size) {
		this.push(this.queue.shift());
	}
}

const dup = new myDuplex();
dup.write('HI THERE');
dup.write('HOW ARE YOU?');
dup.pipe(process.stdout);



myDuplex.prototype.pipe = () => {};
