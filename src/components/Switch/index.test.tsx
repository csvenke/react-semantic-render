import { shallow } from 'enzyme';
import * as React from 'react';

import Switch from './';

const createElement = (value, values, withDefault = true) => (
  <Switch value={value}>
    {values.map((item, index) => (
      <Switch.Case key={item} value={item}>
        <div>{`case ${index}`}</div>
      </Switch.Case>
    ))}
    {withDefault ? (
      <Switch.Default>
        <div>default</div>
      </Switch.Default>
    ) : null}
  </Switch>
);

const getResult = index => `<div>case ${index}</div>`;

describe('without default case', () => {
  test('should return content from first case', () => {
    const wrapper = shallow(createElement(0, [0, 1, 2], false));
    expect(wrapper.html()).toEqual(getResult(0));
  });

  test('should return content from second case', () => {
    const wrapper = shallow(createElement(1, [0, 1, 2], false));
    expect(wrapper.html()).toEqual(getResult(1));
  });

  test('should return content from third case', () => {
    const wrapper = shallow(createElement(2, [0, 1, 2], false));
    expect(wrapper.html()).toEqual(getResult(2));
  });

  test('should return null', () => {
    const wrapper = shallow(createElement(3, [0, 1, 2], false));
    expect(wrapper.html()).toEqual(null);
  });
});

describe('with default case', () => {
  test('should return content from first case', () => {
    const wrapper = shallow(createElement(0, [0, 1, 2]));
    expect(wrapper.html()).toEqual(getResult(0));
  });

  test('should return content from second case', () => {
    const wrapper = shallow(createElement(1, [0, 1, 2]));
    expect(wrapper.html()).toEqual(getResult(1));
  });

  test('should return content from third case', () => {
    const wrapper = shallow(createElement(2, [0, 1, 2]));
    expect(wrapper.html()).toEqual(getResult(2));
  });

  test('should return null', () => {
    const wrapper = shallow(createElement(3, [0, 1, 2]));
    expect(wrapper.html()).toEqual('<div>default</div>');
  });
});

describe('input tests', () => {
  test('should return content when value is number', () => {
    const wrapper = shallow(createElement(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    expect(wrapper.html()).toEqual(getResult(3));
  });

  test('should return content when value is string', () => {
    const wrapper = shallow(createElement('salsa', [0, 1, 2, 3, 'salsa', 5, 6, 7, 8]));
    expect(wrapper.html()).toEqual(getResult(4));
  });

  test('should return content when value is boolean (true)', () => {
    const wrapper = shallow(createElement(true, [0, 1, 2, 3, 4, 5, true, 7, 8, 9]));
    expect(wrapper.html()).toEqual(getResult(6));
  });

  test('should return content when value is boolean (false)', () => {
    const wrapper = shallow(createElement(false, [0, 1, 2, 3, 4, 5, false, 7, 8, 9]));
    expect(wrapper.html()).toEqual(getResult(6));
  });
});

describe('misc tests', () => {
  test('should return content from first occurence when multiple matches', () => {
    const wrapper = shallow(createElement(true, [0, 1, 2, true, 4, 5, true, 7, 8, 9]));
    expect(wrapper.html()).toEqual(getResult(3));
  });
});
