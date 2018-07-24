import { isPromise } from './isPromise';

describe('isPromise type check', () => {
  test('Should return positive if supplied a promise', () => {
    const prom = new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, 10);
    });
    const result = isPromise({ prom }, 'prom', 'component');
    expect(result).toEqual(null);
  });
  test('Should return positive if supplied a nothing', () => {
    const result = isPromise({}, 'prom', 'component');
    expect(result).toEqual(null);
  });
  [
    'not a promise',
    a => a,
    true,
    1,
    ['contains', 'not', 'a', 'promise'],
    null,
    undefined,
  ].forEach(notPromise =>
    test(`Should return negative if supplied a ${typeof notPromise}`, () => {
      const result = isPromise({ prom: 'not a promise' }, 'prom', 'component');
      expect(result).toMatchObject(new Error('prom in component is not a promise'));
    }),
  );
});
