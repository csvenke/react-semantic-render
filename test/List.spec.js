import React from "react";
import renderer from "react-test-renderer";

import { List as List1 } from "../dist/index.cjs";
import { List as List2 } from "../dist/index.esm";
import List3 from "../dist/List";
import List4 from "../src/List";

const describeEach = describe.each([List1, List2, List3, List4]);

const input = [1, 2, 3];

describeEach("with render", (List) => {
  it("should return primary content from render", () => {
    const element = (
      <List items={input} render={(n) => <div key={n}>{n}</div>} />
    );
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describeEach("with children", (List) => {
  it("should return primary content from children", () => {
    const element = <List items={input}>{(n) => <div key={n}>{n}</div>}</List>;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describeEach("with children and render", (List) => {
  it("should return primary content from children and ignore render", () => {
    const element = (
      <List items={input} render={(n) => <a key={n}>{n}</a>}>
        {(n) => <div key={n}>{n}</div>}
      </List>
    );
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describeEach("without children and render", (List) => {
  it("should return null", () => {
    const element = <List items={input} />;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
