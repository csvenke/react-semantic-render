import * as React from 'react';

import isFunction from '.';

test('should return true', () => {
  const result = isFunction(() => 'something');
  expect(result).toEqual(true);
});

test('should return false', () => {
  const cases = [
    'something',
    false,
    true,
    undefined,
    null,
    <div>something</div>,
    [1, 2, 3],
    { a: 'a', b: 'b' },
  ];

  cases.forEach(item => {
    const result = isFunction(item);
    expect(result).toEqual(false);
  });
});
