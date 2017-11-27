import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy();

	t.true(result[0].title === result[0].arg);
	t.true(result[0].arg.length >= 15);
	t.true(result[0].arg.split(' ').length === 4);
});
