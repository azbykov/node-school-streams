const fs = require('fs');

const readStream = fs.createReadStream('./source/stream-data.file');
const writeStream = fs.createWriteStream('./source/writable-data.file');

function write() {
	let chunk = readStream.read();
	if (chunk !== null) {
		const bufferGood = writeStream.write(chunk);
		if (!bufferGood) {
			readStream.removeListener('readable', write);
			writeStream.once('drain', function() {
				readStream.on('readable', write);
				write();
			});
		}
	}
}

readStream.on('readable', write);
readStream.on('end', () => writeStream.end());
writeStream.once('finish', () => console.log('End!'));


