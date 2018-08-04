import { shallow } from 'enzyme';
import * as React from 'react';

import { getChildrenOrRender } from './getChildrenOrRender';

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
});
