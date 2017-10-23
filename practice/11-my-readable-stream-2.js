const {Readable} = require('stream');

const MyReadable = new Readable({
	read() {
		if (this.content.length === this.currIndex) {
			this.push(null);
		} else {
			this.push(this.content[this.currIndex++]);
		}
	}
});

MyReadable.content = ['First element', 'Second element', 'Third element'];
MyReadable.currIndex = 0;

MyReadable.pipe(process.stdout);
