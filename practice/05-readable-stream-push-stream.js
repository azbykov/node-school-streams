const fs = require('fs');

const stream = fs.createReadStream('./source/stream-data.file');

stream.on('data', (chunk) => {
	console.log(`got ${chunk.length} bytes of data`);
});

stream.on('end', () => console.log('End!'));

stream.on('error', (err) => console.error(err));




