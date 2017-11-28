'use strict';

let fs = require('fs');

let lineReader = require('readline').createInterface({
	input: fs.createReadStream('./ord.runeberg.txt', 'utf8')
});

let words = [];

function include(word) {
	let re = /^([a-zåäö]){3,10}$/;
	return re.exec(word);
}

lineReader.on('line', function (line) {
	if (include(line)) {
		words.push(line);
	} else {
		console.log('Omitted ' + line);
	}
});

lineReader.on('close', function () {
	let outputFilename = '../ord.json';
	fs.writeFile(outputFilename, JSON.stringify(words), function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Dictionary saved. Number of words: ' + words.length);
		}
	});
});
