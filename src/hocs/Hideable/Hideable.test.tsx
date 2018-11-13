import * as React from 'react';
import renderer from 'react-test-renderer';

import Hideable from '.';

const Button = ({ label }) => <button>{label}</button>;
const HideableButton = Hideable(Button);

test('should show component', () => {
  const component = renderer.create(
    <HideableButton hideComponent={false} label="Click me!" />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should return null', () => {
  const component = renderer.create(
    <HideableButton hideComponent={true} label="Click me!" />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
