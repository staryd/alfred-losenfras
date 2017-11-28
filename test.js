import test from 'ava';
import alfyTest from 'alfy-test';

test('No args gives four words', async t => {
	const alfy = alfyTest();
	const result = await alfy('');

	t.true(result[0].title === result[0].arg);
	t.true(result[0].arg.length >= 15);
	t.true(result[0].arg.split(' ').length === 4);
});

test('First arg set number of words', async t => {
	const numberOfWords = 6;
	const alfy = alfyTest();
	const result = await alfy(numberOfWords);
	t.true(result[0].arg.split(' ').length === numberOfWords);
});

test('Second arg set separator', async t => {
	const numberOfWords = 5;
	const separator = '#';
	const alfy = alfyTest();
	const result = await alfy(numberOfWords + ' ' + separator);
	t.true(result[0].arg.split(separator).length === numberOfWords);
});
