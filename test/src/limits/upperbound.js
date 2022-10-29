import test from 'ava';

import {loge, logloge} from '@arithmetic-type/double';

import {__upperbound__} from '../../../src/index.js';

test('limits', (t) => {
	const upperbound = __upperbound__(loge, logloge);

	t.true(upperbound(54) > 251, '54');
	t.true(upperbound(55) > 257, '55');
	t.true(upperbound(1000) > 7919, '1000');
	t.true(upperbound(39_017) > 467_473, '39017');
	t.true(upperbound(39_018) > 467_477, '39018');
});
