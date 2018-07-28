import { shallow } from 'enzyme';
import * as React from 'react';

import Switch from './Switch';

const input = <div>case</div>;
const result = '<div>case</div>';

test('should return content from render', () => {
  const element = <Switch.Case value={1} render={() => input} />;
  const wrapper = shallow(element);
  expect(wrapper.html()).toEqual(result);
});

test('should return content from children', () => {
  const element = <Switch.Case value={1}>{input}</Switch.Case>;
  const wrapper = shallow(element);
  expect(wrapper.html()).toEqual(result);
});
