const fs = require('fs');

const writeStream = fs.createWriteStream('./source/hello-world.file');

writeStream.write('Hello\n');
writeStream.write('World\n');
writeStream.end();

writeStream.once('finish', () => console.log('End!'));


