import { test, expect } from '@jest/globals';
import { canIterate } from '../canIterate';

test.each([
  [ new Map(), true ],
  [ new Set(), true ],
  [ 'Netology', true ],
  [ 10, false ],
  [ null, false ]
])(('Testing the `canIterate()` function'),
  (value, expected) => {
    const result = canIterate(value);
    expect(result).toBe(expected);
  });