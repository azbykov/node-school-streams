const fs = require('fs');
const file = fs.createWriteStream('./source/stream-data.file');

for (let i = 0; i < 1e6; i++) {
	file.write('Streams can help to separate your concerns because ' +
		'they restrict the implementation surface area into ' +
		'a consistent interface that can be reused. You can ' +
		'then plug the output of one stream to the input of ' +
		'another and use libraries that operate abstractly ' +
		'on streams to institute higher-level flow control. ' +
		'Streams are an important component of small-program ' +
		'design and unix philosophy but there are many other ' +
		'important abstractions worth considering. Just remember ' +
		'that technical debt is the enemy and to seek the best ' +
		'abstractions for the problem at hand.\n');
}

file.end();

