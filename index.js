'use strict';
const fs = require('fs');
const alfy = require('alfy');

const input = alfy.input.split(' ');
const numberOfWords = parseInt(input[0], 10) || 4;
const separator = input[1] || ' ';

let wordList = JSON.parse(fs.readFileSync('ord.json', 'utf8'));

function genaratePhrase(numberOfWords, separator) {
	let wordPhrase = '';
	for (let i = 1; i <= numberOfWords; i++) {
		let index = Math.floor(Math.random() * (wordList.length + 1));
		wordPhrase = wordPhrase.concat(wordList[index]);
		if (i < numberOfWords) {
			wordPhrase = wordPhrase.concat(separator);
		}
	}

	return {
		title: wordPhrase,
		arg: wordPhrase
	};
}

let result = [];

for (let j = 0; j < 4; j++) {
	result.push(genaratePhrase(numberOfWords, separator));
}

alfy.output(result);
