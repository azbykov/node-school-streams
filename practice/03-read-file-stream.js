const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	const src = fs.createReadStream('./source/stream-data.file');
	src.pipe(res);
});

server.listen(8000, () => console.log('Server start on 8000'));



