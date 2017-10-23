const fs = require('fs');

const stream = fs.createReadStream('./source/stream-data.file');

stream.on('readable', () => {
	console.log('readable:', stream.read());
});

stream.on('end', () => console.log('End!'));

stream.on('error', (err) => console.error(err));



