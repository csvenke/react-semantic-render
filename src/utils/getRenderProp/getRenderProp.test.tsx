import * as React from 'react';

import getRenderProp from '.';

const case1 = <div>children</div>;
const case2 = () => <div>render</div>;

test('should return children', () => {
  // prettier-ignore
  const cases = [
    [case1, case2],
    [case1, undefined],
    [case1, null],
  ];

  cases.forEach(item => {
    const result = getRenderProp(item[0], item[1]);
    expect(result).toEqual(case1);
  });
});

test('should return render', () => {
  const result = getRenderProp(undefined, case2)();
  expect(result).toEqual(case2());
});

test('should return null', () => {
  // prettier-ignore
  const cases = [
    [undefined, undefined],
    [null, null],
  ];

  cases.forEach(item => {
    const result = getRenderProp(item[0], item[1]);
    expect(result).toEqual(null);
  });
});
