const {Readable} = require('stream');

class MyReadable extends Readable {
	constructor(options) {
		super(options);
		this.currIndex = 0;
		this.content = ['First element', 'Second element', 'Third element'];
	}
	_read() {
		if (this.content.length === this.currIndex) {
			this.push(null);
		} else {
			this.push(this.content[this.currIndex++]);
		}
	}
}

const stream = new MyReadable();

module.exports = MyReadable;
