import { shallow } from 'enzyme';
import * as React from 'react';

import getChildrenOrRender from './getChildrenOrRender';

describe('with children node and render function', () => {
  const children = <div>result</div>;
  const render = () => <div>result</div>;
  const result = '<div>result</div>';

  test('should return content from children', () => {
    const wrapper = shallow(getChildrenOrRender(children, render));
    expect(wrapper.html()).toEqual(result);
  });

  test('should return content from render', () => {
    const wrapper = shallow(getChildrenOrRender(undefined, render));
    expect(wrapper.html()).toEqual(result);
  });

  test('should return null', () => {
    const wrapper = getChildrenOrRender(undefined, undefined);
    expect(wrapper).toEqual(null);
  });
});

describe('with children function and render function', () => {
  const children = () => <div>result</div>;
  const render = () => <div>result</div>;
  const result = '<div>result</div>';

  test('should return content from children', () => {
    const wrapper = shallow(getChildrenOrRender(children, render));
    expect(wrapper.html()).toEqual(result);
  });

  test('should return content from render', () => {
    const wrapper = shallow(getChildrenOrRender(undefined, render));
    expect(wrapper.html()).toEqual(result);
  });

  test('should return null', () => {
    const wrapper = getChildrenOrRender(undefined, undefined);
    expect(wrapper).toEqual(null);
  });
});

describe('input tests', () => {
  test('should return null', () => {
    const wrapper = getChildrenOrRender(123, undefined);
    expect(wrapper).toEqual(null);
  });

  test('should return null', () => {
    const wrapper = getChildrenOrRender(undefined, 123);
    expect(wrapper).toEqual(null);
  });

  test('should return null', () => {
    const wrapper = getChildrenOrRender(123, 123);
    expect(wrapper).toEqual(null);
  });
});
