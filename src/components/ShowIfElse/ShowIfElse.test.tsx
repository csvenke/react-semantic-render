import * as React from 'react';
import renderer from 'react-test-renderer';

import ShowIfElse from '.';

const createComponent = condition => (
  <ShowIfElse
    condition={condition}
    if={() => <div>if</div>}
    else={() => <div>else</div>}
  />
);

test('should return content from if', () => {
  const component = renderer.create(createComponent(true));
  expect(component.toJSON()).toMatchSnapshot();
});

test('should return content from else', () => {
  const component = renderer.create(createComponent(false));
  expect(component.toJSON()).toMatchSnapshot();
});
