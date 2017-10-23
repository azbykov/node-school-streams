const {EventEmitter} = require('events');
const emitter = new EventEmitter();

// Subscribe
emitter.on('foo', (arg1, arg2) => {
	console.log('Foo raised, Args:', arg1, arg2);
});

// Emit
emitter.emit('foo', { a: 123 }, { b: 456 });







