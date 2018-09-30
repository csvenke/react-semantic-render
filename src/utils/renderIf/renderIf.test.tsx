import * as React from 'react';

import renderIf from '.';

const case1 = <div>children</div>;
const case2 = () => <div>function</div>;

test('should return input', () => {
  const cases = [case1, case2()];

  cases.forEach(item => {
    const result = renderIf(true)(item);
    expect(result).toEqual(item);
  });
});

test('should return null', () => {
  const cases = [case1, case2()];

  cases.forEach(item => {
    const result = renderIf(false)(item);
    expect(result).toEqual(null);
  });
});
