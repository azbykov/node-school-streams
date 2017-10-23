const fs = require('fs');

const readStream = fs.createReadStream('./source/stream-data.file');
const writeStream = fs.createWriteStream('./source/writable-data.file');

readStream.pipe(writeStream);
writeStream.once('finish', () => console.log('End!'));


