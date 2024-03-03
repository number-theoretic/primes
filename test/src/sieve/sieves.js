import test from 'ava';

import {usqrt32} from '@arithmetic-type/uint32';
import {alloc} from '@array-like/alloc';
import {get, set} from '@array-like/experimental';
import {fill} from '@array-like/fill';
import {bind} from '@functional-abstraction/functools';
import {product} from '@set-theory/cartesian-product';

import data from '../../data/1000.json' assert {type: 'json'};

import {
	__gothrough__,
	__eratosthenes__,
	__eratosthenes2__,
	__eratosthenes23__,
} from '#module';

const gothrough = __gothrough__(set);

function run([[sievename, sieve], n]) {
	test(sievename + ' ' + n, (t) => {
		const primes = [];

		sieve(n, bind(primes.push, primes, []));

		const len = primes.length;

		t.deepEqual(
			primes,
			data.slice(0, len),
			`set contains the first ${len} prime numbers`,
		);
		t.true(data[len] >= n, `found all primes below ${n}, next is ${data[len]}`);
	});
}

const inputs = product(
	[
		[
			['Eratosthenes', __eratosthenes__(alloc, fill, get, gothrough, usqrt32)],
			[
				'Eratosthenes - 2',
				__eratosthenes2__(alloc, fill, get, gothrough, usqrt32),
			],
			[
				'Eratosthenes - 2 , 3',
				__eratosthenes23__(alloc, fill, get, gothrough, usqrt32),
			],
		],
		[0, 1, 2, 3, 4, 5, 6, 10, 15, 49, 100, 200, 1000, 7919],
	],
	1,
);

for (const x of inputs) run(x);
