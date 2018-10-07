import { shallow } from 'enzyme';
import * as React from 'react';

import Hideable from '.';

const Button = ({ label }) => <button>{label}</button>;
const HideableButton = Hideable(Button);

test('should return component', () => {
  const result = shallow(<HideableButton hideComponent={false} label="Click me!" />);
  expect(result.html()).toEqual('<button>Click me!</button>');
});

test('should return null', () => {
  const result = shallow(<HideableButton hideComponent={true} label="Click me!" />);
  expect(result.html()).toEqual(null);
});
