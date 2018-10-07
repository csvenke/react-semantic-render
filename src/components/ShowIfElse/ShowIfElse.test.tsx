import { shallow } from 'enzyme';
import * as React from 'react';

import ShowIfElse from '.';

const createComponent = condition => (
  <ShowIfElse
    condition={condition}
    if={() => <div>if</div>}
    else={() => <div>else</div>}
  />
);

test('should return content from if', () => {
  const result = shallow(createComponent(true));
  expect(result.html()).toEqual('<div>if</div>');
});

test('should return content from else', () => {
  const result = shallow(createComponent(false));
  expect(result.html()).toEqual('<div>else</div>');
});
