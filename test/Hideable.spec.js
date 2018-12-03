import React from "react";
import renderer from "react-test-renderer";

import { Hideable } from "..";

const Button = props => <button>{props.label}</button>;
const HideableButton = Hideable(Button);

test("should show component", () => {
  const component = renderer.create(
    <HideableButton hide={false} label="Click me!" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test("should return null", () => {
  const component = renderer.create(
    <HideableButton hide={true} label="Click me!" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
