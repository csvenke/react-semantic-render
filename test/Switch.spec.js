import React from "react";
import renderer from "react-test-renderer";

import { Switch as Switch1 } from "../dist/index.cjs";
import { Switch as Switch2 } from "../dist/index.esm";
import Switch3 from "../dist/Switch";
import Switch4 from "../src/Switch";

const describeEach = describe.each([Switch1, Switch2, Switch3, Switch4]);

const makeCreateElement = Switch => (value, values, withDefault = true) => (
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

describeEach("without default case", Switch => {
  const createElement = makeCreateElement(Switch);

  it("should return content from first case", () => {
    const component = renderer.create(createElement(0, [0, 1, 2], false));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return content from second case", () => {
    const component = renderer.create(createElement(1, [0, 1, 2], false));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return content from third case", () => {
    const component = renderer.create(createElement(2, [0, 1, 2], false));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return null", () => {
    const component = renderer.create(createElement(3, [0, 1, 2], false));
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describeEach("with default case", Switch => {
  const createElement = makeCreateElement(Switch);

  it("should return content from first case", () => {
    const component = renderer.create(createElement(0, [0, 1, 2]));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return content from second case", () => {
    const component = renderer.create(createElement(1, [0, 1, 2]));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return content from third case", () => {
    const component = renderer.create(createElement(2, [0, 1, 2]));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return null", () => {
    const component = renderer.create(createElement(3, [0, 1, 2]));
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describeEach("input tests", Switch => {
  const createElement = makeCreateElement(Switch);

  it("should return content when value is number", () => {
    const component = renderer.create(
      createElement(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return content when value is string", () => {
    const component = renderer.create(
      createElement("salsa", [0, 1, 2, 3, "salsa", 5, 6, 7, 8])
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return content when value is boolean (true)", () => {
    const component = renderer.create(
      createElement(true, [0, 1, 2, 3, 4, 5, true, 7, 8, 9])
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should return content when value is boolean (false)", () => {
    const component = renderer.create(
      createElement(false, [0, 1, 2, 3, 4, 5, false, 7, 8, 9])
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describeEach("misc tests", Switch => {
  const createElement = makeCreateElement(Switch);

  it("should return content from first occurence when multiple matches", () => {
    const component = renderer.create(
      createElement(true, [0, 1, 2, true, 4, 5, true, 7, 8, 9])
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
